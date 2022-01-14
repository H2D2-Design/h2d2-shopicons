if (!document.querySelector("style[data-shopicon]")) {
  const style = document.createElement("style");
  style.setAttribute("data-shopicon", true);
  style.innerHTML = `
    [data-shopicon] { display: block; width: 24px; aspect-ratio: 1; }
    [data-shopicon][size=m] { width: 32px; }
    [data-shopicon][size=l] { width: 48px; }
    [data-shopicon][size=xl] { width: 64px; }

    [data-shopicon] circle:not([fill]),
    [data-shopicon] path:not([fill]),
    [data-shopicon] polygon:not([fill]),
    [data-shopicon] rect:not([fill]) { fill: currentColor; }
  `;
  document.head.appendChild(style);
}
