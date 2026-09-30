# Alignment backlog

**Baseline (going forward):** [BRAND.md](./BRAND.md)  
**Look like:** [home](https://powder-ranger.github.io/) and [games](https://powder-ranger.github.io/games/)

Directory of live hubs: [pages.html](https://powder-ranger.github.io/pages.html)

---

## 1. Already on baseline

| Surface | Notes |
|---------|--------|
| https://powder-ranger.github.io/ | Constructivist home |
| https://powder-ranger.github.io/games/ | Constructivist arcade hub |
| [BRAND.md](./BRAND.md) | Written spec |

---

## 2. Portfolio repo pages — not on baseline yet

These live in `POWDER-RANGER/powder-ranger.github.io`.

| URL | File | Work |
|-----|------|------|
| https://powder-ranger.github.io/repos.html | `repos.html` | Still rounded Kryptonite shell; restyle to hard-edge + all-caps |
| https://powder-ranger.github.io/pages.html | `pages.html` | Same |
| https://powder-ranger.github.io/deviant.html | `deviant.html` | Legacy theme; compress/remove `DEVIANT2026.jpg` (~2.9 MB) |
| https://powder-ranger.github.io/hf-bot.html | `hf-bot.html` | Old chrome |
| https://powder-ranger.github.io/games/flappy/ | `games/flappy/index.html` | Game UI — wrap in baseline chrome |

---

## 3. GitHub profile README — not fully on baseline

| Surface | Repo | Work |
|---------|------|------|
| https://github.com/POWDER-RANGER | `POWDER-RANGER/POWDER-RANGER` `README.md` | Crimson pass already done. Next: retint `assets/banner.svg` to exact `#E31C23` / `#0a0000`, keep all-caps tone, no lime, no Vercel widgets. Cannot use Oswald or live glitch here. |
| `project-index.md` | same repo | Keep status language in sync with the README |

---

## 4. Project GitHub Pages — live (HTTP 200) but not on baseline

Each is its **own repo**. Restyle the Pages site there.

| Live URL | Repo |
|----------|------|
| https://powder-ranger.github.io/nso-kryptonite-platform/ | nso-kryptonite-platform |
| https://powder-ranger.github.io/CIVWATCH/ | CIVWATCH |
| https://powder-ranger.github.io/OBLISK/ | OBLISK |
| https://powder-ranger.github.io/RED-AGENT-GOV/ | RED-AGENT-GOV |
| https://powder-ranger.github.io/ai-nexus/ | ai-nexus |
| https://powder-ranger.github.io/dollar-gravity-framework/ | dollar-gravity-framework |
| https://powder-ranger.github.io/nine-realities-netcode/ | nine-realities-netcode |
| https://powder-ranger.github.io/OBELISK-Desktop-AI/ | OBELISK-Desktop-AI |
| https://powder-ranger.github.io/RainGod-Comfy-Studio/ | RainGod-Comfy-Studio |
| https://powder-ranger.github.io/Artifact-Catalog/ | Artifact-Catalog |
| https://powder-ranger.github.io/powder-ranger-bot/ | powder-ranger-bot |
| https://powder-ranger.github.io/dojin-d/ | dojin-d |
| https://powder-ranger.github.io/contextual-memory-ui/ | contextual-memory-ui |

NSO is the original command aesthetic. Product UX can stay; **new chrome** (nav, type, corners, case) should follow BRAND.md when that repo is touched.

---

## 5. No Pages site (404 when probed)

Leave as GitHub-only unless we decide they need a hub:

- CharlesAI
- raingod-studio-v4
- guiding-light-ai
- red-team-osint-tool
- civwatch-watchtower
- powder-ranger-stone
- systems-architecture-portfolio

---

## 6. Games hub — titles still to ship

Hub: https://powder-ranger.github.io/games/

| Title | Status | Required |
|-------|--------|----------|
| Flappy Bird | Live | `/games/flappy/` — restyle chrome only |
| **Snake** | Queued | Build + list as PLAYABLE |
| **Pong** | Queued | Build + list as PLAYABLE |
| **Space Invaders** | Queued | Build + list as PLAYABLE |
| **Tetris** | Queued | Build + list as PLAYABLE |
| Breakout | Queued | After the four above |

Ship bar (already on the hub): instant play, touch + keyboard, short round / fast restart. Kaboom.js + GitHub Pages.

---

## 7. Suggested sequence

1. `repos.html` + `pages.html` (same repo, same chrome)
2. Profile `README.md` + banner SVG final pass
3. `games/flappy/` chrome
4. **Snake → Pong → Space Invaders → Tetris** on the games hub
5. Flagship project Pages: CIVWATCH, OBLISK, RED-AGENT-GOV
6. Remaining live project Pages
7. `deviant.html` / `hf-bot.html` or retire them
