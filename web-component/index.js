import svg from "../SVG/Bold/Shopicons_Bold_BatteryFull.svg"

class Icon extends HTMLElement {
  constructor() {
    super();
    this.setAttribute("style", "height: 48px; width: 48px; display: block;");
    this.innerHTML = svg;
  }
}

window.customElements.define("h2d2-shopicon-bold", Icon)