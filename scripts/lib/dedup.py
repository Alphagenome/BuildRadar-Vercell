import re
from rapidfuzz import fuzz

FUZZY_THRESHOLD = 80
_STRIP_RE = re.compile(r"\b(ltd|limited|co|llc|plc|inc)\b", re.I)
_PUNCT_RE = re.compile(r"[^\w\s]")


def _normalise(name: str) -> str:
    name = name.lower()
    name = _PUNCT_RE.sub(" ", name)
    name = _STRIP_RE.sub(" ", name)
    return " ".join(name.split())


def load_contacted_names(manifest_text: str) -> list[str]:
    in_pipeline = False
    names = []
    for line in manifest_text.splitlines():
        if "PROSPECT PIPELINE" in line.upper():
            in_pipeline = True
            continue
        if in_pipeline and line.startswith("## "):
            break
        if in_pipeline and line.startswith("|") and not line.startswith("| Name") and not line.startswith("| Prospect") and "---" not in line:
            cell = line.split("|")[1].strip()
            if " — " in cell:
                cell = cell.split(" — ", 1)[1]
            if cell:
                names.append(_normalise(cell))
    return names


def mark_already_contacted(prospects: list[dict], contacted_names: list[str]) -> list[dict]:
    for p in prospects:
        norm = _normalise(p.get("name", ""))
        p["already_contacted"] = any(
            fuzz.partial_ratio(norm, c) >= FUZZY_THRESHOLD
            for c in contacted_names
        )
    return prospects
