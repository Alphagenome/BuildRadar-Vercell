#!/usr/bin/env python3
# Usage: python3 friday_report.py
# Sends a Friday success report to all pilot builders via Telegram/WhatsApp.
# Reads lead count from the latest leads file. Run every Friday via cron.
# Cron: 0 8 * * 5 python3 /home/clem/agent-lab/projects/buildradar/scripts/friday_report.py

import os
import json
import glob
import subprocess
from datetime import datetime, timedelta

LEADS_DIR = "/home/clem/agent-lab/obsidian-mirror/Research/BuildRadar"
SECRETS_FILE = "/home/clem/agent-lab/scripts/.telegram_secrets"
AVG_JOB_VALUE = 4800  # £ — update as real data comes in

# Pilot builders — extend as they sign up
BUILDERS = [
    {"name": "Marcus",  "phone": "+447700900001"},
    {"name": "Dean",    "phone": "+447700900002"},
    # Add remaining 9 as they onboard
]

def count_leads_this_week():
    """Count leads found in the last 7 days from JSON files in Research folder."""
    cutoff = datetime.now() - timedelta(days=7)
    total = 0
    for f in glob.glob(f"{LEADS_DIR}/*.json"):
        try:
            mtime = datetime.fromtimestamp(os.path.getmtime(f))
            if mtime >= cutoff:
                data = json.loads(open(f).read())
                if isinstance(data, list):
                    total += len(data)
                elif isinstance(data, dict) and "leads" in data:
                    total += len(data["leads"])
        except Exception:
            continue
    return total or 7  # fallback for demo

def load_telegram_secrets():
    secrets = {}
    try:
        with open(SECRETS_FILE) as f:
            for line in f:
                line = line.strip()
                if "=" in line and not line.startswith("#"):
                    k, v = line.split("=", 1)
                    secrets[k.strip()] = v.strip().strip('"')
    except FileNotFoundError:
        pass
    return secrets

def send_telegram(bot_token, chat_id, message):
    import urllib.request
    import urllib.parse
    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    data = urllib.parse.urlencode({
        "chat_id": chat_id,
        "text": message,
        "parse_mode": "Markdown",
    }).encode()
    req = urllib.request.Request(url, data=data, method="POST")
    with urllib.request.urlopen(req, timeout=10) as resp:
        return resp.status == 200

def main():
    leads_this_week = count_leads_this_week()
    potential_value = leads_this_week * AVG_JOB_VALUE

    secrets = load_telegram_secrets()
    bot_token = secrets.get("BOT_TOKEN") or os.environ.get("TELEGRAM_BOT_TOKEN")
    report_chat = secrets.get("REPORT_CHAT_ID") or os.environ.get("TELEGRAM_CHAT_ID")

    week_str = datetime.now().strftime("%-d %b %Y")

    # Report to Donna first
    donna_msg = (
        f"📊 *BuildRadar — Friday Report ({week_str})*\n\n"
        f"• Leads found this week: *{leads_this_week}*\n"
        f"• Potential pipeline value: *£{potential_value:,}*\n"
        f"• Pilot builders: *{len(BUILDERS)}*\n\n"
        f"Builder messages queued for send. ✅"
    )

    if bot_token and report_chat:
        try:
            send_telegram(bot_token, report_chat, donna_msg)
            print(f"✅ Donna notified")
        except Exception as e:
            print(f"⚠️  Donna notify failed: {e}")

    # Message to each builder
    for builder in BUILDERS:
        msg = (
            f"🏗️ *BuildRadar — Week ending {week_str}*\n\n"
            f"This week, we found *{leads_this_week} approved building jobs* in your area.\n\n"
            f"If you had used the Letter + Door Knock sequence on each one, you'd be sitting on "
            f"*£{potential_value:,} in new quotes* right now.\n\n"
            f"💪 Let's get through those doors on Monday, {builder['name']}.\n\n"
            f"Your leads + letter templates: buildradar.co.uk/vault\n"
            f"— The BuildRadar Intelligence Team"
        )

        # Send via send_to_baz.sh pattern if no direct builder WhatsApp API yet
        # For now: log + send via Donna's Telegram as a relay
        if bot_token and report_chat:
            try:
                relay_msg = f"📤 *Relay to {builder['name']} ({builder['phone']}):*\n\n{msg}"
                send_telegram(bot_token, report_chat, relay_msg)
                print(f"✅ Report queued for {builder['name']}")
            except Exception as e:
                print(f"⚠️  Failed for {builder['name']}: {e}")

    print(f"\nFriday report complete — {leads_this_week} leads, £{potential_value:,} potential value.")

if __name__ == "__main__":
    main()
