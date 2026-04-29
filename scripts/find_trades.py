#!/usr/bin/env python3
"""
find_trades.py — Find local tradespeople via Google Maps Places API.

Usage:
  python3 find_trades.py <trade> <postcode> [--limit N]

Example:
  python3 find_trades.py roofer SW12
  python3 find_trades.py "window fitter" SW11 --limit 10
"""

import argparse
import os
import sys
from datetime import date
from pathlib import Path

from dotenv import load_dotenv

SCRIPT_DIR = Path(__file__).parent
REPO_ROOT = SCRIPT_DIR.parent
sys.path.insert(0, str(SCRIPT_DIR))

load_dotenv(REPO_ROOT / ".env")

from lib.places import search_places, PlacesError
from lib.scraper import extract_email
from lib.dedup import load_contacted_names, mark_already_contacted
from lib.output import save_json, format_table

BOARD_PATH = Path("/home/clem/agent-lab/shared/BOARD.md")
PROSPECTS_DIR = REPO_ROOT / "data" / "prospects"

_SUPPLIER_KEYWORDS = {
    "merchant", "merchants", "supplier", "suppliers", "wholesale",
    "materials", "trade counter", "factors", "factor", "depot",
    "plumbers merchants", "builders merchants",
}


def _is_supplier(name: str) -> bool:
    lower = name.lower()
    return any(kw in lower for kw in _SUPPLIER_KEYWORDS)


def log(msg: str) -> None:
    print(f"[find_trades] {msg}", flush=True)


def main() -> None:
    parser = argparse.ArgumentParser(description="Find local tradespeople via Google Maps")
    parser.add_argument("trade", help="Trade type e.g. roofer, electrician")
    parser.add_argument("postcode", help="Postcode or area e.g. SW12")
    parser.add_argument("--limit", type=int, default=20, help="Max results (default 20)")
    args = parser.parse_args()

    api_key = os.getenv("GOOGLE_PLACES_API_KEY")
    if not api_key:
        print("ERROR: GOOGLE_PLACES_API_KEY not set in .env", file=sys.stderr)
        sys.exit(1)

    log(f"trade={args.trade.upper()} area={args.postcode} limit={args.limit}")

    try:
        prospects = search_places(args.trade, args.postcode, api_key=api_key, limit=args.limit)
    except PlacesError as e:
        print(f"ERROR: {e}", file=sys.stderr)
        sys.exit(1)
    log(f"Places API → {len(prospects)} results")

    before = len(prospects)
    prospects = [p for p in prospects if not _is_supplier(p.get("name", ""))]
    if before != len(prospects):
        log(f"Supplier filter: removed {before - len(prospects)} non-tradespeople")

    scraped = 0
    for p in prospects:
        if p.get("website"):
            email = extract_email(p["website"])
            if email:
                p["email"] = email
                scraped += 1
    log(f"Email scrape: {len(prospects)} sites → {scraped} emails found")

    if BOARD_PATH.exists():
        board_text = BOARD_PATH.read_text()
        contacted = load_contacted_names(board_text)
        prospects = mark_already_contacted(prospects, contacted)
        skipped = [p for p in prospects if p["already_contacted"]]
        for p in skipped:
            print(f"[SKIP] {p['name']} — already in pipeline")
        log(f"Dedup: {len(skipped)} skipped (already in pipeline)")
    else:
        log("WARNING: BOARD.md not found — skipping dedup")

    fresh = [p for p in prospects if not p["already_contacted"]]
    log(f"Fresh targets: {len(fresh)}")

    PROSPECTS_DIR.mkdir(parents=True, exist_ok=True)
    safe_trade = args.trade.lower().replace(" ", "-")
    safe_area = args.postcode.lower().replace(" ", "")
    today = date.today().isoformat()
    filename = f"{safe_area}-{safe_trade}-{today}.json"
    out_path = PROSPECTS_DIR / filename
    rel_path = f"data/prospects/{filename}"

    save_json(prospects, str(out_path))
    log(f"Output → {out_path}")
    log(f"Add to BOARD.md LEAD DATA: | {args.postcode} | {len(fresh)} | Available | — | {rel_path} |")

    print()
    print(format_table(prospects))


if __name__ == "__main__":
    main()
