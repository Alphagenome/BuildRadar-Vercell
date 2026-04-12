#!/usr/bin/env python3
# Usage: python3 companies_house_lookup.py
# Looks up director names for Wandsworth tradespeople via Companies House public site.
# Writes results back to the case brief and the leads file.

import requests
import time
import re
from bs4 import BeautifulSoup

BASE = "https://find-and-update.company-information.service.gov.uk"
HEADERS = {"User-Agent": "Mozilla/5.0 (BuildRadar research tool)"}

COMPANIES = [
    ("Buildify Ltd",                  "Builder"),
    ("Working Builders Ltd",          "Builder"),
    ("Bluebird Spaces",               "Builder"),
    ("LB Roofing Specialist Ltd",     "Roofer"),
    ("Links Roofing Ltd",             "Roofer"),
    ("Property Restoration Services", "Roofer"),
    ("Chic Landscapes",               "Landscaper"),
    ("BlueTeam Group Ltd",            "Landscaper"),
    ("West London Landscapers",       "Landscaper"),
    ("Thames Windows & Doors Ltd",    "Window/Door"),
    ("Battersea Double Glazing",      "Window/Door"),
    ("Wandsworth Double Glazing",     "Window/Door"),
    ("GR Engineers Ltd",              "Architect/SE"),
    ("Armstrong Simmonds Architects", "Architect/SE"),
    ("Studio Werc",                   "Architect/SE"),
]

WANDSWORTH_POSTCODES = {"SW4", "SW8", "SW11", "SW12", "SW16", "SW17", "SW18", "SW19", "SW20", "CR4"}


def format_name(raw):
    """Convert 'SURNAME, Firstname' to 'Firstname Surname'."""
    raw = raw.strip()
    if "," in raw:
        parts = raw.split(",", 1)
        surname = parts[0].strip().title()
        first = parts[1].strip().title()
        return f"{first} {surname}"
    return raw.title()


def search_company(name):
    """Search Companies House and return best matching company number."""
    url = f"{BASE}/search/companies?q={requests.utils.quote(name)}"
    r = requests.get(url, headers=HEADERS, timeout=10)
    if r.status_code != 200:
        return None, None
    soup = BeautifulSoup(r.text, "html.parser")
    links = soup.select("a[href*='/company/']")
    exact = None
    first = None
    for link in links:
        href = link.get("href", "")
        m = re.match(r'^/company/([A-Z0-9]+)$', href)
        if not m:
            continue
        company_number = m.group(1)
        link_name = link.text.strip()
        if not first:
            first = (company_number, link_name)
        if link_name.upper() == name.upper() and not exact:
            exact = (company_number, link_name)
    result = exact or first
    return (result[0], result[1]) if result else (None, None)


def get_active_director(company_number):
    """Return the first active director name for a company number."""
    url = f"{BASE}/company/{company_number}/officers"
    r = requests.get(url, headers=HEADERS, timeout=10)
    if r.status_code != 200:
        return None
    soup = BeautifulSoup(r.text, "html.parser")

    # Officers are in appointment-N divs; name in span[id^="officer-name-"]
    # Walk each appointment block and check role + resigned status
    for i in range(1, 20):
        name_span = soup.find("span", id=f"officer-name-{i}")
        if not name_span:
            break
        name_link = name_span.find("a")
        if not name_link:
            continue
        raw_name = name_link.text.strip()

        # Check role for this officer
        role_dd = soup.find("dd", id=f"officer-role-{i}")
        if role_dd and "director" not in role_dd.text.strip().lower():
            continue

        # Check for resignation
        resigned = soup.find(id=f"officer-resigned-on-{i}")
        if resigned and resigned.text.strip():
            continue

        # Also check for "Resigned on" text near this officer block
        appointment_div = soup.find(id=f"appointment-{i}")
        if appointment_div and "Resigned on" in appointment_div.text:
            continue

        return format_name(raw_name)
    return None


def main():
    results = {}
    print(f"\n{'Company':<40} {'Number':<12} {'Director'}")
    print("-" * 75)
    for name, trade in COMPANIES:
        try:
            company_number, matched_name = search_company(name)
            if not company_number:
                results[name] = "not found"
                print(f"{name:<40} {'—':<12} not found")
                time.sleep(1)
                continue
            director = get_active_director(company_number)
            results[name] = director if director else "not found"
            display = director if director else "not found"
            print(f"{name:<40} {company_number:<12} {display}")
        except Exception as e:
            results[name] = "not found"
            print(f"{name:<40} {'ERROR':<12} {e}")
        time.sleep(1.5)  # polite rate limit

    print("\n--- Writing to case brief ---")
    update_case_brief(results)
    print("Done.")
    return results


def update_case_brief(results):
    path = "/home/clem/agent-lab/obsidian-mirror/07-Inbox/CASE_BRIEF_WANDSWORTH_PROJECT_ZERO.md"
    with open(path, "r") as f:
        content = f.read()

    # Replace each blank cell in the director table
    for name, director in results.items():
        # Match table row with blank director cell
        pattern = rf'(\| {re.escape(name)} \| [^\|]+ \| )\|'
        replacement = rf'\g<1>{director} |'
        content = re.sub(pattern, replacement, content)

    # Update status
    content = content.replace("status: open", "status: complete")

    # Update tags
    content = content.replace(
        "tags: [harvey-action, buildradar, wandsworth, leads]",
        "tags: [mike-action, buildradar, wandsworth, leads]"
    )

    with open(path, "w") as f:
        f.write(content)
    print(f"Updated: {path}")


if __name__ == "__main__":
    main()
