(() => {
  const REPO = document.currentScript?.dataset?.repo || "";
  document.documentElement.classList.add("pr-branded");
  document.body?.classList.add("pr-brand-surface");

  if (!document.querySelector(".pr-brand-edge")) {
    const edge = document.createElement("div");
    edge.className = "pr-brand-edge";
    edge.setAttribute("aria-hidden","true");
    document.body.prepend(edge);
  }

  const nativeNav = document.querySelector("nav, .nav, .navbar, header nav, [role='navigation']");
  if (!nativeNav && !document.querySelector(".pr-brand-ribbon")) {
    const ribbon = document.createElement("div");
    ribbon.className = "pr-brand-ribbon";
    ribbon.innerHTML = `
      <div class="pr-brand-ribbon-inner">
        <a class="pr-brand-ribbon-brand" href="https://powder-ranger.github.io/">POWDER-RANGER</a>
        <div class="pr-brand-ribbon-links">
          <a href="https://powder-ranger.github.io/">HOME</a>
          <a href="https://powder-ranger.github.io/pages.html">PAGES</a>
          <a href="https://powder-ranger.github.io/games/">GAMES</a>
          <a href="https://github.com/POWDER-RANGER">GITHUB</a>
          ${REPO ? `<a class="pr-brand-ribbon-source" href="https://github.com/POWDER-RANGER/${encodeURIComponent(REPO)}">SOURCE</a>` : ""}
        </div>
        <div class="pr-brand-ribbon-status">LIVE</div>
      </div>`;
    document.body.prepend(ribbon);
    document.body.style.paddingTop = "54px";
  }

  if (!document.querySelector('meta[name="theme-color"]')) {
    const meta = document.createElement("meta");
    meta.name = "theme-color";
    meta.content = "#0a0000";
    document.head.appendChild(meta);
  }

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const h = document.querySelector("h1");
    if (h && h.textContent.trim().length > 3 && !h.dataset.prDecode) {
      h.dataset.prDecode = "1";
      const finalText = h.textContent;
      const glyphs = "█▓▒░<>/\\|{}[]#$%&*+=?";
      let frame = 0;
      const tick = () => {
        const reveal = Math.min(finalText.length, Math.floor(frame / 2));
        h.textContent = finalText.split("").map((ch,i) => {
          if (ch === " " || i < reveal) return ch;
          return glyphs[Math.floor(Math.random()*glyphs.length)];
        }).join("");
        frame++;
        if (reveal < finalText.length) requestAnimationFrame(tick);
        else h.textContent = finalText;
      };
      setTimeout(tick, 350);
    }
  }
})();