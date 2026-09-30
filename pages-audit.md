# Pages alignment audit

Baseline: [NSO Kryptonite](https://powder-ranger.github.io/nso-kryptonite-platform/)

Shared tokens: `#0a0a0f` / `#111118`, crimson `#DC143C` / `#ff1744`, Orbitron + Rajdhani + Share Tech Mono, frosted nav, scanline overlay, mode-colored card rails.

Directory of live hubs: [pages.html](./pages.html)

## Already aligned

| Surface | Notes |
|---------|--------|
| `/` (`index.html`) | Kryptonite baseline applied |
| `/repos.html` | Same system + live GitHub API |
| `/pages.html` | This gather page |
| Profile banner `POWDER-RANGER/assets/banner.svg` | Crimson command banner only (README cannot load the fonts) |
| NSO Kryptonite Pages | **Do not restyle away from this** |

## Portfolio repo pages still to update

| Surface | Why |
|---------|-----|
| `deviant.html` | Old theme; `DEVIANT2026.jpg` is ~2.9 MB |
| `hf-bot.html` | Standalone chrome, not on baseline |
| `games/index.html` | Games hub still pre-baseline |
| `games/flappy/index.html` | Game page |

## Project Pages sites still to update

Each lives in **its own repo** (`username.github.io/REPO/`). Restyle there, not only in the portfolio repo.

| Live URL | Repo | Work |
|----------|------|------|
| `/CIVWATCH/` | CIVWATCH | Apply baseline shell; keep product UI |
| `/OBLISK/` | OBLISK | Same |
| `/RED-AGENT-GOV/` | RED-AGENT-GOV | Same |
| `/ai-nexus/` | ai-nexus | Same |
| `/dollar-gravity-framework/` | dollar-gravity-framework | Same |
| `/nine-realities-netcode/` | nine-realities-netcode | Same |
| `/OBELISK-Desktop-AI/` | OBELISK-Desktop-AI | Same |
| `/RainGod-Comfy-Studio/` | RainGod-Comfy-Studio | Same |
| `/Artifact-Catalog/` | Artifact-Catalog | Same |
| `/powder-ranger-bot/` | powder-ranger-bot | Same |
| `/dojin-d/` | dojin-d | Same |
| `/contextual-memory-ui/` | contextual-memory-ui | Same |

## No live Pages (404 when probed 2026-09-30)

Enable Pages or leave as GitHub-only repos:

- CharlesAI
- raingod-studio-v4
- guiding-light-ai
- red-team-osint-tool
- civwatch-watchtower
- powder-ranger-stone
- systems-architecture-portfolio

## Suggested update order

1. `deviant.html` + compress/remove `DEVIANT2026.jpg`
2. `games/` hub
3. Flagship project Pages: CIVWATCH, OBLISK, RED-AGENT-GOV
4. Remaining live project Pages
5. Decide which 404 repos should get a Pages site at all
