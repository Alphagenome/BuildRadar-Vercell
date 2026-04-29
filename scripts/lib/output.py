import json
import re
from datetime import date


def save_json(prospects: list[dict], path: str) -> None:
    with open(path, "w") as f:
        json.dump(prospects, f, indent=2)


def format_table(prospects: list[dict]) -> str:
    fresh = [p for p in prospects if not p.get("already_contacted")]
    if not fresh:
        return "No fresh targets found.\n"
    col_widths = {"name": 32, "trade": 10, "phone": 16, "rating": 6, "email": 30}
    header = (
        f"{'NAME':<{col_widths['name']}}  {'TRADE':<{col_widths['trade']}}  "
        f"{'PHONE':<{col_widths['phone']}}  {'RATING':<{col_widths['rating']}}  EMAIL"
    )
    sep = "-" * len(header)
    rows = [header, sep]
    for p in fresh:
        name = (p.get("name") or "")[:col_widths["name"]]
        trade = (p.get("trade") or "")[:col_widths["trade"]]
        phone = (p.get("phone") or "—")[:col_widths["phone"]]
        rating = str(p.get("rating") or "—")[:col_widths["rating"]]
        email = p.get("email") or "—"
        rows.append(
            f"{name:<{col_widths['name']}}  {trade:<{col_widths['trade']}}  "
            f"{phone:<{col_widths['phone']}}  {rating:<{col_widths['rating']}}  {email}"
        )
    return "\n".join(rows) + "\n"


def append_to_manifest(manifest_path: str, file_path: str, area: str, trade: str, count: int) -> None:
    today = date.today().strftime("%b %d")
    new_row = f"| {file_path} | {today} | {area} | {count} | {trade} | — | ACTIVE |"
    with open(manifest_path, "r") as f:
        content = f.read()
    pattern = r"(\| File \| Created \| Area \| Count \| Trades \| Expires \| Status \|\n\|[-| ]+\|)"
    replacement = r"\1\n" + new_row
    updated = re.sub(pattern, replacement, content)
    if updated == content:
        updated = content.replace("## Leads Data\n", f"## Leads Data\n\n{new_row}\n")
    with open(manifest_path, "w") as f:
        f.write(updated)
