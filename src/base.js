if (!document.querySelector("style[data-shopicon]")) {
  const style = document.createElement("style");
  style.setAttribute("data-shopicon", true);
  style.innerHTML = `
    [data-shopicon] { display: block; }
    [data-shopicon][size=tiny] { height: 24px; width: 24px; }
    [data-shopicon][size=small] { height: 32px; width: 32px; }
    [data-shopicon] { height: 48px; width: 48px; }
    [data-shopicon][size=large] { height: 64px; width: 64px; }

    [data-shopicon] circle:not([fill]),
    [data-shopicon] path:not([fill]),
    [data-shopicon] polygon:not([fill]),
    [data-shopicon] rect:not([fill]) { fill: currentColor; }
  `;
  document.head.appendChild(style);
}