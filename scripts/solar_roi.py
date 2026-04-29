#!/usr/bin/env python3
"""Solar ROI calculator for UK residential properties.

Usage:
    python3 solar_roi.py <postcode> [flat|house|detached]

Examples:
    python3 solar_roi.py SW11
    python3 solar_roi.py E1 flat
    python3 solar_roi.py N1 detached
"""
import json
import sys

# ── Constants ──────────────────────────────────────────────────────────────────
UNIT_RATE = 0.2467          # £/kWh — UK price cap 2026
SEG_RATE = 0.055            # £/kWh — Smart Export Guarantee
SELF_CONSUMPTION = 0.35     # fraction consumed on-site
IRRADIANCE = 850            # kWh/kWp/year — UK average

SYSTEM_KWP = {"flat": 3.0, "house": 4.0, "detached": 5.0}
SYSTEM_COST_GBP = {"flat": 5500, "house": 7500, "detached": 9500}
CO2_KG_PER_KWH = 0.233

DISCLAIMER = (
    "Estimate based on UK average irradiance (850 kWh/kWp/year). "
    "Subject to on-site shading and roof orientation verification."
)


def calculate_roi(postcode: str, property_type: str = "house") -> dict:
    """Return ROI fields for the given postcode and property type.

    Args:
        postcode: UK postcode (stored uppercased, not geographically validated).
        property_type: "flat", "house", or "detached". Defaults to "house".

    Raises:
        ValueError: if property_type is not recognised.
    """
    if property_type not in SYSTEM_KWP:
        raise ValueError(
            f"property_type must be one of {sorted(SYSTEM_KWP)}, got {property_type!r}"
        )

    system_kwp = SYSTEM_KWP[property_type]
    system_cost = SYSTEM_COST_GBP[property_type]

    annual_generation = IRRADIANCE * system_kwp
    self_consumed = annual_generation * SELF_CONSUMPTION
    exported = annual_generation * (1 - SELF_CONSUMPTION)
    annual_savings = (self_consumed * UNIT_RATE) + (exported * SEG_RATE)

    return {
        "postcode": postcode.strip().upper(),
        "property_type": property_type,
        "system_kwp": system_kwp,
        "system_cost_gbp": system_cost,
        "annual_generation_kwh": annual_generation,
        "self_consumed_kwh": self_consumed,
        "exported_kwh": exported,
        "annual_savings_gbp": annual_savings,
        "monthly_savings_gbp": annual_savings / 12,
        "savings_25yr_gbp": annual_savings * 25,
        "payback_years": system_cost / annual_savings,
        "co2_offset_kg": annual_generation * CO2_KG_PER_KWH,
        "disclaimer": DISCLAIMER,
    }


def main() -> None:
    if len(sys.argv) < 2:
        print("Usage: python3 solar_roi.py <postcode> [flat|house|detached]", file=sys.stderr)
        sys.exit(1)

    postcode = sys.argv[1]
    property_type = sys.argv[2] if len(sys.argv) >= 3 else "house"

    try:
        result = calculate_roi(postcode, property_type)
    except ValueError as exc:
        print(f"Error: {exc}", file=sys.stderr)
        sys.exit(1)

    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()
