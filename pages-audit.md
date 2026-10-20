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

## 7. 2026-10-20 source-level audit update

This pass verified repository source, not the published browser experience. Do not treat a merged commit or a successful source check as proof that GitHub Pages has rebuilt or that every destination is reachable.

### Confirmed source fixes

- Replaced literal escaped newline sequences around shared stylesheet/script tags in the portfolio home, Pages directory, repository browser, Games hub, Deviant page, HF Bot page, and Flappy page.
- Restored mobile navigation on the portfolio home, Pages directory, repository browser, Games hub, and all five playable game pages with visible toggles, `aria-expanded`, and `aria-controls`.
- Restored mobile navigation on the NSO Kryptonite, OBLISK, and AI Nexus pages without replacing their product-specific visual systems.
- Added a responsive, keyboard-operable menu to the shared brand ribbon used on project surfaces that do not provide their own navigation.
- Corrected the same escaped-newline markup defect in the NSO Kryptonite entry page while preserving its product-specific Orbitron/Rajdhani design.
- Added page descriptions, Open Graph metadata, and canonical URLs to the portfolio, repository browser, Games hub, legacy surfaces, five game entry pages, and audited project landing pages where those tags were missing.
- Replaced the Contextual Memory UI's placeholder entry document with a responsive project overview. The page explicitly states that its previous entry file contained placeholder application code and does not claim that imports, search, analytics, or a live knowledge graph are operational.
- Expanded the Pages directory with the CIVWATCH status and standards pages and a separate section for publication candidates whose GitHub Pages availability is not confirmed (POWDER-RANGER STONE, Joker Eye Tracker, and the profile companion page).

### Validation boundary

Source-level checks confirmed that the listed files no longer contain the identified literal escaped-newline sequences and that the expected mobile menu controls exist. No live deployment, browser rendering, touch interaction, game-play regression, link crawl, or cross-device accessibility test is claimed by this pass. The portfolio repository currently has no `.github/workflows` directory on its default branch, so this audit did not identify an Actions-based Pages build to verify.

### Remaining work

1. Confirm publication state and canonical URLs for each listed Pages destination.
2. Test mobile navigation, keyboard focus, contrast, and reduced-motion behavior in an actual browser.
3. Validate that project links and external destinations resolve, and label unavailable or archived surfaces accurately.
4. Continue page-by-page content review without replacing functioning project UIs with static mockups or overriding product-specific identity.
