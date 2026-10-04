# POWDER-RANGER GitHub Pages alignment

**Baseline:** [BRAND.md](./BRAND.md)
**Reference implementations:** [home](https://powder-ranger.github.io/) · [games](https://powder-ranger.github.io/games/)

This audit was refreshed 2026-10-04 after the Pages branding pass.

## 1. Portfolio core

| Surface | State |
|---|---|
| `/` | Baseline-aligned |
| `/pages.html` | Baseline-aligned + live status refreshed |
| `/repos.html` | Baseline-aligned |
| `/games/` | Baseline-aligned |
| `/games/flappy/` | Baseline-aligned |
| `/deviant.html` | Shared brand rail added |
| `/hf-bot.html` | Shared brand rail added |

## 2. Shared Pages branding

`assets/brand-pages.css` and `assets/brand-pages.js` now provide a common compatibility layer for project Pages.

The layer enforces the POWDER-RANGER visual baseline: hard edges, crimson geometry, Oswald/Share Tech Mono UI type, reduced-motion handling, a live edge/ribbon, and source navigation where a project surface lacks its own navigation.

Project product/runtime UIs were preserved rather than replaced.

## 3. Project Pages

| Live URL | Repo | State |
|---|---|---|
| `/CivilianIntelligence/` | CivilianIntelligence | Baseline + shared rail |
| `/nso-kryptonite-platform/` | nso-kryptonite-platform | Product UI preserved + shared rail |
| `/CIVWATCH/` | CIVWATCH | Legacy/source UI preserved + shared rail |
| `/OBLISK/` | OBLISK | Shared rail |
| `/RED-AGENT-GOV/` | RED-AGENT-GOV | Shared rail |
| `/ai-nexus/` | ai-nexus | Shared rail |
| `/dollar-gravity-framework/` | dollar-gravity-framework | Shared rail |
| `/nine-realities-netcode/` | nine-realities-netcode | Shared rail |
| `/OBELISK-Desktop-AI/` | OBELISK-Desktop-AI | Shared rail |
| `/RainGod-Comfy-Studio/` | RainGod-Comfy-Studio | Shared rail |
| `/Artifact-Catalog/` | Artifact-Catalog | Shared rail |
| `/powder-ranger-bot/` | powder-ranger-bot | Shared rail |
| `/contextual-memory-ui/` | contextual-memory-ui | Shared rail |
| `/dojin-d/` | dojin-d | New branded docs/index.html landing page added |

## 4. Games

Current source tree contains six titles:

| Title | State |
|---|---|
| Flappy Bird | Playable |
| Snake | Playable |
| Pong | Playable |
| Space Invaders | Playable |
| Tetris | Playable |
| Breakout | Queued |

The previous backlog entry claiming those four games were still queued was stale and has been corrected.

## 5. Current civic spine

- CivilianIntelligence remains the current civic system of record.
- CIVWATCH remains a legacy/source surface.
- Watchtower and Cell Titan remain specialized rails.

## 6. Remaining housekeeping

The major visual alignment pass is complete. Remaining work is primarily content-level refinement, accessibility QA, and publication verification for any repository whose GitHub Pages source/build configuration is external to the edited HTML entry point.