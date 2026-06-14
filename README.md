# Master Command Center

Sovereign operations dashboard for the GrowthLifePower ecosystem — covering **Relove Soul Finds**, **FeLAA Atelier**, **Growth Life Power**, and **AfroLegal**.

## Live URL
[hub.growthlifepower.com](https://hub.growthlifepower.com)

## What it does

| Tab | Purpose |
|---|---|
| Overview | Live snapshot — SKU count, revenue potential, Faire alerts, margin drift alerts |
| Product Registry | All 14 products across 4 brands — filterable by brand and type |
| Faire 60-Day | Visual countdown per Faire item with Day 45/50/55 return trigger markers |
| Arbitrage Hub | Amazon margin tracker with price drift alerts per product line |
| Brand Pages | Quick-reference cards for all 4 brands |
| JIT Flow | 6-step mobile fulfillment SOP + ecosystem architecture map |

## Stack
- Single `index.html` — no build step, no framework
- Cloudflare Pages (auto-deploy from this repo)
- Chart.js 4.4 via CDN
- Font Awesome 6.5 via CDN

## Deploy
Connect this repo to Cloudflare Pages → set custom domain to `hub.growthlifepower.com`.
No build command needed. Output directory: `/` (root).

## Brands
- 🟤 **FeLAA Atelier** — gallery drops, textiles, art objects
- 🟣 **Relove Soul Finds** — upcycled vintage & curated thrift finds
- 🟢 **Growth Life Power** — digital products & community events
- 🟡 **AfroLegal** — legal empowerment resources
