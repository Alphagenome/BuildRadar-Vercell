#!/usr/bin/env python3
"""Tests for scripts/solar_roi.py
Run: pytest tests/test_solar_roi.py -v
"""
import json
import os
import subprocess
import sys

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "scripts"))
import solar_roi


# ── Constants ──────────────────────────────────────────────────────────────────

def test_unit_rate():
    assert solar_roi.UNIT_RATE == 0.2467

def test_seg_rate():
    assert solar_roi.SEG_RATE == 0.055

def test_self_consumption():
    assert solar_roi.SELF_CONSUMPTION == 0.35

def test_irradiance():
    assert solar_roi.IRRADIANCE == 850

def test_system_kwp_values():
    assert solar_roi.SYSTEM_KWP == {"flat": 3.0, "house": 4.0, "detached": 5.0}

def test_system_cost_values():
    assert solar_roi.SYSTEM_COST_GBP == {"flat": 5500, "house": 7500, "detached": 9500}

def test_co2_constant():
    assert solar_roi.CO2_KG_PER_KWH == 0.233


# ── Output shape ───────────────────────────────────────────────────────────────

def test_returns_dict():
    assert isinstance(solar_roi.calculate_roi("SW11", "house"), dict)

def test_required_keys():
    result = solar_roi.calculate_roi("SW11", "house")
    assert {
        "postcode", "property_type", "system_kwp", "system_cost_gbp",
        "annual_generation_kwh", "self_consumed_kwh", "exported_kwh",
        "annual_savings_gbp", "monthly_savings_gbp", "savings_25yr_gbp",
        "payback_years", "co2_offset_kg", "disclaimer",
    }.issubset(result.keys())

def test_disclaimer_is_nonempty_string():
    result = solar_roi.calculate_roi("SW11", "house")
    assert isinstance(result["disclaimer"], str) and len(result["disclaimer"]) > 20


# ── Numeric correctness: house ─────────────────────────────────────────────────

def test_house_annual_generation():
    assert solar_roi.calculate_roi("SW11", "house")["annual_generation_kwh"] == pytest.approx(3400.0)

def test_house_self_consumed():
    assert solar_roi.calculate_roi("SW11", "house")["self_consumed_kwh"] == pytest.approx(1190.0)

def test_house_exported():
    assert solar_roi.calculate_roi("SW11", "house")["exported_kwh"] == pytest.approx(2210.0)

def test_house_annual_savings():
    # (1190 × 0.2467) + (2210 × 0.055) = 293.573 + 121.55 = 415.123
    assert solar_roi.calculate_roi("SW11", "house")["annual_savings_gbp"] == pytest.approx(415.123, rel=1e-4)

def test_house_monthly_savings():
    r = solar_roi.calculate_roi("SW11", "house")
    assert r["monthly_savings_gbp"] == pytest.approx(r["annual_savings_gbp"] / 12)

def test_house_savings_25yr():
    r = solar_roi.calculate_roi("SW11", "house")
    assert r["savings_25yr_gbp"] == pytest.approx(r["annual_savings_gbp"] * 25)

def test_house_payback():
    r = solar_roi.calculate_roi("SW11", "house")
    assert r["payback_years"] == pytest.approx(7500 / 415.123, rel=1e-4)

def test_house_co2():
    assert solar_roi.calculate_roi("SW11", "house")["co2_offset_kg"] == pytest.approx(792.2, rel=1e-4)


# ── Numeric correctness: flat ──────────────────────────────────────────────────

def test_flat_annual_generation():
    assert solar_roi.calculate_roi("E1", "flat")["annual_generation_kwh"] == pytest.approx(2550.0)

def test_flat_annual_savings():
    # (2550×0.35×0.2467) + (2550×0.65×0.055) = 220.183 + 91.163 = 311.345
    assert solar_roi.calculate_roi("E1", "flat")["annual_savings_gbp"] == pytest.approx(311.345, rel=1e-3)

def test_flat_payback():
    assert solar_roi.calculate_roi("E1", "flat")["payback_years"] == pytest.approx(5500 / 311.345, rel=1e-3)


# ── Numeric correctness: detached ─────────────────────────────────────────────

def test_detached_annual_generation():
    assert solar_roi.calculate_roi("N1", "detached")["annual_generation_kwh"] == pytest.approx(4250.0)

def test_detached_co2():
    assert solar_roi.calculate_roi("N1", "detached")["co2_offset_kg"] == pytest.approx(990.25, rel=1e-4)


# ── Postcode handling ──────────────────────────────────────────────────────────

def test_postcode_uppercased():
    assert solar_roi.calculate_roi("sw11 4ab")["postcode"] == "SW11 4AB"

def test_postcode_short_stored():
    assert solar_roi.calculate_roi("SW11")["postcode"] == "SW11"


# ── Default property_type = "house" ───────────────────────────────────────────

def test_default_is_house():
    assert solar_roi.calculate_roi("SW11")["system_kwp"] == solar_roi.SYSTEM_KWP["house"]


# ── Invalid property_type raises ──────────────────────────────────────────────

def test_invalid_property_type():
    with pytest.raises(ValueError, match="property_type"):
        solar_roi.calculate_roi("SW11", "bungalow")


# ── CLI ────────────────────────────────────────────────────────────────────────

_SCRIPT = os.path.join(os.path.dirname(__file__), "..", "scripts", "solar_roi.py")


def test_cli_valid_json():
    r = subprocess.run(["python3", _SCRIPT, "SW11", "house"],
                       capture_output=True, text=True, timeout=10)
    assert r.returncode == 0, r.stderr
    data = json.loads(r.stdout)
    assert data["postcode"] == "SW11"
    assert data["property_type"] == "house"

def test_cli_default_property_type():
    r = subprocess.run(["python3", _SCRIPT, "E1"],
                       capture_output=True, text=True, timeout=10)
    assert r.returncode == 0
    assert json.loads(r.stdout)["property_type"] == "house"

def test_cli_no_args_exits_nonzero():
    r = subprocess.run(["python3", _SCRIPT],
                       capture_output=True, text=True, timeout=10)
    assert r.returncode != 0

def test_cli_invalid_type_exits_nonzero():
    r = subprocess.run(["python3", _SCRIPT, "SW11", "bungalow"],
                       capture_output=True, text=True, timeout=10)
    assert r.returncode != 0

def test_cli_pretty_prints():
    r = subprocess.run(["python3", _SCRIPT, "SW11", "house"],
                       capture_output=True, text=True, timeout=10)
    assert "\n" in r.stdout
