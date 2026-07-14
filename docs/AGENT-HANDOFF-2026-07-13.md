# Agent Handoff — Blind Teknologis website + Tekmetric submission

**Date:** 2026-07-13  
**Owner:** Tyson (Blind Teknologis)  
**Give this file to the next agent at session start.**

---

## Mission (read first)

Tekmetric API access is open. Treat the **marketing site + brand assets + application packet** as an **execution path**, not a speculative readiness exercise.

**Product:** TekBox — a Knowledge Platform that sits **on top of** shop management systems (Tekmetric first). It does **not** replace SMS.

**Public site:** https://blindteknologis.com  
**Website repo:** `C:\TekBox\blindteknologis-website` → `https://github.com/blindteknologi/blindteknologis-website` (`main`)  
**Product repo:** `C:\TekBox\TekBox` → `https://github.com/blindteknologi/TekBox` (`main`)

---

## Current git status (VERIFIED 2026-07-13)

### Website (`blindteknologis-website`)
- Branch: `main` = `origin/main`
- Latest: `24ec767` — `fix: enlarge logo 1.5x and align footer to content margins`
- Prior relevant commits:
  - `bf797dc` — constrain hero backgrounds to content-width margins
  - `85d1c66` — restore visible content + transparent logos
  - `955e00d` — submission-ready site for Tekmetric diligence

### TekBox product repo
- Branch: `main` = `origin/main` (except local uncommitted `.cursor/` / `.vscode/` noise — ignore unless asked)
- Latest relevant: `f2550c1` — `docs: add Tekmetric API application support packet`

---

## What was completed this session arc

### Website — submission-ready marketing site
- Next.js 15 static export → GitHub Pages
- Honest public pages (no fake stats / fake partner grids / fake product modules)
- Content-width margins: heroes, dark bands, and footer inset to `section-shell` (same L/R edges)
- Logo: official mark with transparent background
  - Header: `public/logo.png` (black/red)
  - Footer: `public/logo-on-dark.png` (white/red) — no white plate
  - Display height ~60–72px (1.5× prior size)
- Contact emails wired: `info@`, `sales@`, `api@`, `support@`, `privacy@`
- Real Privacy Policy (`/privacy/`) and Terms (`/terms/`)
- Products page: “in development” + real TekBox feature list
- Integrations page: Tekmetric-first execution narrative (no fake logo wall)

### Application support materials
| Location | Purpose |
|----------|---------|
| `blindteknologis-website/docs/TEKMETRIC-API-APPLICATION-PACKET.md` | Concise partner/API diligence packet |
| `TekBox/docs/tekmetric-application/` | Deeper packet: vision, security, technical seriousness, proof screenshots |

---

## Critical architecture / brand rules (do not violate)

1. **No fictional certainty** — no inventing automotive facts, ROI stats, or “supported” integrations that are not live.
2. **UNKNOWN is first-class** — fail closed; never silently substitute another vehicle’s data.
3. **Vendor-neutral core** — Tekmetric-specific mapping belongs in adapters only.
4. **TekBox ≠ SMS replacement** — sit on top of Tekmetric / shop systems.
5. **Blind Teknologis branding only** on the marketing site — do not brand as TekBox publicly in a way that conflicts with stealth/enterprise positioning without Tyson approval.
6. **UI/UX / branding final approval = Tyson.**
7. **Static export caution:** never leave Framer Motion (or similar) at `initial={{ opacity: 0 }}` without a guaranteed visible SSR/hydration path — that caused blank pages.

---

## Key files (website)

| Path | Role |
|------|------|
| `src/app/page.tsx` | Homepage section order + alternating constrained bands |
| `src/components/HomeHero.tsx` | Home hero (inset background) |
| `src/components/PageHero.tsx` | Inner-page heroes (inset) |
| `src/components/SiteHeader.tsx` | Sticky nav + large logo |
| `src/components/SiteFooter.tsx` | Inset dark footer + logo-on-dark |
| `src/components/MotionReveal.tsx` | Scroll motion **without** opacity:0 hide |
| `src/lib/site.ts` | Nav, emails, `TEKBOX_FEATURES`, `PLATFORM_CARDS`, metadata |
| `src/app/globals.css` | `.section-shell` margins (`lg:px-[calc(2.5rem+1in)]`) |
| `public/logo.png` | Transparent official logo (light bg) |
| `public/logo-on-dark.png` | Transparent white/red variant (dark bg) |
| `public/images/hero-visual.png` | Hero / section backdrop art |
| `docs/TEKMETRIC-API-APPLICATION-PACKET.md` | Diligence packet |

### Homepage block order (intentional)
1. Header — white  
2. Hero — dark inset panel (hero visual bg)  
3. Feature strip — white  
4. Platform — dark inset (hero visual bg)  
5. About — white  
6. Products — dark inset (hero visual bg)  
7. Integrations — white  
8. Contact CTA — dark card in shell  
9. Footer — dark inset panel matching content margins  

---

## Known issues / open follow-ups

### Likely still needs Tyson’s eye
- [ ] Visual QA of live site after latest deploys (logo size, hero/footer inset alignment)
- [ ] Higher-res logo export if 300×90 looks soft on retina (prefer 600×180 or 900×270 PNG, still transparent)
- [ ] Social links in footer are decorative placeholders (not real URLs)
- [ ] Integration partner logos still intentionally absent until live/verified

### Technical debt / caution
- Cursor `move_agent_to_root` to the website repo can fail if the chat is tied to TekBox branch `feat/m55-executive-review` (does not exist on website remote). Work via path `C:\TekBox\blindteknologis-website` or open that folder as the workspace.
- Avoid committing `.cursor/`, `homepage-1440.png`, `lighthouse-home.json`, `tmp-http-*.log`, `archive/` unless explicitly requested.
- `docs/tekmetric-application/screenshots/` lives under a global `screenshots/` gitignore rule in TekBox — files were force-added in `f2550c1`; re-adding new screenshots may need `git add -f`.

### Product truth for marketing (VERIFIED in TekBox codebase — safe to list as in development)
- VIN decode / vehicle identity  
- Capability enrichment + provenance  
- Maintenance intelligence  
- Vehicle Intelligence report  
- Evidence / UNKNOWN honesty  
- Service history + timeline  
- Service Advisor Dashboard  
- Knowledge mining foundation  
- Shop-system adapter architecture (Tekmetric first)

### Do **not** claim as shipped
- Live Tekmetric API connectivity  
- Multi-SMS partner logo wall  
- Fake ROI statistics  
- DVI rewriter as GA, portals, recalls, predictive maintenance as product

---

## How to verify before declaring done

```powershell
cd C:\TekBox\blindteknologis-website
npm run build
# Serve out/ locally if needed, then:
# Hard-refresh https://blindteknologis.com after GitHub Pages deploy
```

Browser verification: prefer **IronBee DevTools** browser MCP when available (`ironbee-dt-browser`). Do not use Cursor’s built-in browser agent for this project’s browser work when IronBee is enabled.

---

## Contacts (site + diligence)

| Role | Email |
|------|-------|
| General | info@blindteknologis.com |
| Sales / early access | sales@blindteknologis.com |
| API / Tekmetric diligence | api@blindteknologis.com |
| Support | support@blindteknologis.com |
| Privacy | privacy@blindteknologis.com |

---

## Suggested next actions for the new agent

1. Open `C:\TekBox\blindteknologis-website`, confirm `main` matches `origin/main`, hard-refresh live site, compare to Tyson’s intent on logo size + footer/hero margins.  
2. If Tyson is filing Tekmetric now: use `docs/TEKMETRIC-API-APPLICATION-PACKET.md` + `TekBox/docs/tekmetric-application/` as the packet; do not invent capabilities.  
3. Only then resume TekBox product/integration engineering for Tekmetric adapters — keep marketing claims fail-closed until connectivity is real.  
4. Escalate to Tyson for: business decisions, UI/UX/branding approvals, irreversible git ops, credentials.

---

## One-line status

**Marketing site is submission-oriented and deployed on `main`; Tekmetric diligence packets exist in both repos; live Tekmetric integration is still the next product execution milestone, not a completed claim.**
