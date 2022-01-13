const icons = document
  .querySelector("meta[name=icons]")
  .getAttribute("content")
  .split(",");

const template = (style = "regular", color = "black_white", size = "s") => `
  <h1>H2D2 Shopicons</h1>
  <fieldset>
    <legend>Style</legend>
    ${["light", "regular", "bold", "filled"]
      .map(
        (s) =>
          `<label><input type="radio" name="style" value="${s}" ${
            s === style ? "checked" : ""
          }> ${s}</label>`
      )
      .join(" ")}
  </fieldset>
  <fieldset>
    <legend>Größe</legend>
    ${["s", "m", "l", "xl"]
      .map(
        (s) =>
          `<label><input type="radio" name="size" value="${s}" ${
            s === size ? "checked" : ""
          }> ${s}</label>`
      )
      .join(" ")}
  </fieldset>
  <fieldset>
    <legend>Farbe</legend>
    ${["black_white", "gray_white", "white_black"]
      .map(
        (c) =>
          `<label><input type="radio" name="color" value="${c}" ${
            c === color ? "checked" : ""
          }> ${c}</label>`
      )
      .join(" ")}
  </fieldset>
  <div class="icons ${color}">
    ${icons
      .filter((icon) => icon.endsWith(style))
      .map(
        (icon) => `<div class="icon">
        <${icon} size="${size}"></${icon}>
        <small>${icon.split("-")[1]}</small>
      </div>`
      )
      .join("\n")}
  </div>
  <style>
    body { padding: 0; margin: 0; font-family: "Helvetica Neue", Helvetica, Arial }
    h1 { margin: 1.5rem 2rem; }
    fieldset { display: inline-block;  margin: 1.5rem 2rem; border: 1px solid black; border-radius: 3px; }
    .icon { padding: 0.5em; margin-bottom: 0.4em; text-align: center; width: 70px; height: 85px; display: flex; align-items: center; justify-content: center; flex-direction: column; }
    .icon small { padding-top: 0.5em; max-width: 100%; overflow: hidden; text-overflow: ellipsis; display: block; self-justify: end; font-size: 0.7rem; height: 1.2em; }
    [data-shopicon] { margin: 0 auto; }
    .icons { display: flex; flex-wrap: wrap; padding: 1.5rem 2rem; }
    .icons.black_white { color: black; background-color: white; }
    .icons.gray_white { color: lightgrey; background-color: white; }
    .icons.white_black { color: white; background-color: black; }
  </style>
`;

const main = document.createElement("main");
main.innerHTML = template();

document.body.appendChild(main);

function changeHandler() {
  const style = document.querySelector('input[name="style"]:checked').value;
  const color = document.querySelector('input[name="color"]:checked').value;
  const size = document.querySelector('input[name="size"]:checked').value;
  main.innerHTML = template(style, color, size);
  addEvents();
}

function addEvents() {
  var radios = document.querySelectorAll("input[type=radio]");
  Array.prototype.forEach.call(radios, function (radio) {
    radio.addEventListener("change", changeHandler);
  });
}

addEvents();
