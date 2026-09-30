# POWDER-RANGER brand baseline

**Effective 2026-09-30. This is the look going forward.**

Reference implementations (apply these, do not invent a third look):

- Home: https://powder-ranger.github.io/
- Games hub: https://powder-ranger.github.io/games/

NSO Kryptonite remains a *product* page. New work copies the **home / games** constructivist system below — hard edge, all caps, poster geometry — not the older rounded Orbitron shell.

---

## Visual rules

| Token | Value | Use |
|-------|--------|-----|
| Background | `#0a0000` | Page |
| Panel | `#120000` / `#1a0000` | Cards, bars |
| Red | `#E31C23` | Rules, CTAs, status |
| Blood | `#8B0000` | Depth |
| Ink | `#F2E8E8` | Headlines |
| Mute | `#A08080` | Body |
| Line | `#4A1010` | Secondary rules |
| Display | **Oswald** 500/700 | All titles and body UI |
| Mono | **Share Tech Mono** | Nav, badges, chips |

### Non-negotiables

1. **All caps** on UI text (nav, titles, cards, buttons, footer).
2. **No rounded corners.** `border-radius: 0` on every element.
3. **Hard geometry.** 3px red borders. Shared grid edges (no card gaps). 8px hero stripe.
4. **Block lettering.** Condensed poster weight. No petite or lowercase display type.
5. **Live text** on heroes: decode/glitch scramble that resolves, then repeats. Honor `prefers-reduced-motion`.
6. **No badge walls, no paused Vercel widgets** on READMEs.
7. English only. Type should *feel* like a Cold War poster (weight, case, geometry), not fake Cyrillic.

### Motion

- Hero title decode (~1s), repeat ~7–12s.
- Optional counter decode on stat numerals.
- Pulse on ONLINE / ARCADE ONLINE squares — not pills.

### GitHub README exception

GitHub Markdown cannot load Oswald or run the glitch. Profile README uses:

- Same colors (`#E31C23` / `#0A0A0F` / `#FF1744`)
- `assets/banner.svg` in the special repo
- Typing SVG in crimson
- Shields in crimson
- No lime, no Vercel stats/trophies

---

## Apply order

See [pages-audit.md](./pages-audit.md).
