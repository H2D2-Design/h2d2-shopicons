if (!document.querySelector("style[data-shopicon]")) {
  const style = document.createElement("style");
  style.setAttribute("data-shopicon", true);
  style.innerHTML = `
    [data-shopicon] { display: block; height: 24px; width: 24px; }
    [data-shopicon][size=m] { height: 32px; width: 32px; }
    [data-shopicon][size=l] { height: 48px; width: 48px; }
    [data-shopicon][size=xl] { height: 64px; width: 64px; }

    [data-shopicon] circle:not([fill]),
    [data-shopicon] path:not([fill]),
    [data-shopicon] polygon:not([fill]),
    [data-shopicon] rect:not([fill]) { fill: currentColor; }
  `;
  document.head.appendChild(style);
}
