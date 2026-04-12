# PayPal Setup Guide — BuildRadar

**Date:** 2026-04-11
**Status:** ACTION REQUIRED — Clem to complete in PayPal dashboard

---

## Overview

Creating PayPal payment links for all BuildRadar tiers. Clem needs to create these in his PayPal Business dashboard, then paste the links back here.

---

## Products to Create

Go to: **paypal.com** → Log in → **Pay & Get Paid** → **Payment Links** (or search "Payment Links")

### Product 1: PAYG — Single Lead Credit
| Field | Value |
|-------|-------|
| **Item name** | BuildRadar — Single Lead Credit |
| **Description** | One verified planning lead in your trade and area, delivered via WhatsApp |
| **Price** | £5.00 |
| **Quantity** | Allow buyer to change (so they can buy multiple) |
| **No shipping required** | ✅ |
| **No tax** | ✅ |

Create → Copy link → Paste here: `____________________`

### Product 2: PAYG — 10 Lead Bundle
| Field | Value |
|-------|-------|
| **Item name** | BuildRadar — 10 Lead Bundle |
| **Description** | 10 verified planning leads in your trade and area. Save 20% vs single. Valid 30 days. |
| **Price** | £40.00 |
| **Quantity** | Fixed at 1 |
| **No shipping required** | ✅ |
| **No tax** | ✅ |

Create → Copy link → Paste here: `____________________`

### Product 3: Builder Monthly
This one should be a **Subscription** (recurring).

Go to: **All Tools** → **Get Paid** → **Subscriptions** → **Create Plan**

| Field | Value |
|-------|-------|
| **Plan name** | BuildRadar Builder — Monthly |
| **Description** | All leads in 3 areas, your trade, unlimited. Delivered every Friday via WhatsApp. |
| **Billing cycle** | Monthly |
| **Price** | £49.00/month |
| **Setup fee** | £0 |
| **Free trial** | 14 days (covers the free pilot period) |
| **Currency** | GBP |

Create → Generate Link → Copy link → Paste here: `____________________`

### Product 4: Pro Monthly
| Field | Value |
|-------|-------|
| **Plan name** | BuildRadar Pro — Monthly |
| **Description** | 3 trades × 5 areas, lead enrichment, priority delivery. Delivered every Friday via WhatsApp. |
| **Billing cycle** | Monthly |
| **Price** | £79.00/month |
| **Setup fee** | £0 |
| **Free trial** | 14 days |
| **Currency** | GBP |

Create → Generate Link → Copy link → Paste here: `____________________`

### Product 5: Weekly Pass
| Field | Value |
|-------|-------|
| **Item name** | BuildRadar — Weekly Pass |
| **Description** | All leads in your area for this week only. One payment, no commitment. |
| **Price** | £15.00 |
| **Quantity** | Fixed at 1 |
| **No shipping required** | ✅ |

Create → Copy link → Paste here: `____________________`

### Product 6: Agency Monthly
| Field | Value |
|-------|-------|
| **Plan name** | BuildRadar Agency — Monthly |
| **Description** | Unlimited trades × 10 areas, API access, white-label reports. |
| **Billing cycle** | Monthly |
| **Price** | £149.00/month |
| **Setup fee** | £0 |
| **Free trial** | 14 days |
| **Currency** | GBP |

Create → Generate Link → Copy link → Paste here: `____________________`

---

## What Happens After You Paste the Links

1. Jessica stores them in config
2. Mike adds them to buildradar.co.uk/pricing page
3. WhatsApp messages to builders include the relevant link
4. When a builder pays, PayPal sends Clem an email notification
5. Jessica/Clem activates their account in the territory system

## PayPal Webhook (Later — Optional)

For fully automated activation (payment → instant account unlock), we can add a PayPal webhook to the BuildRadar site. But for the pilot phase, manual activation via PayPal email notification is fine.

---

## Quick-Start Checklist

- [ ] Log into PayPal Business
- [ ] Create 4 one-off payment links (£5, £40, £15)
- [ ] Create 3 subscription plans (£49, £79, £149)
- [ ] Copy all 6 links
- [ ] Send links to Jessica via chat
- [ ] Jessica files them and briefs Mike for pricing page

**Estimated time: 10 minutes**
