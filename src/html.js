const icons = document
  .querySelector("meta[name=icons]")
  .getAttribute("content")
  .split(",");

const html = `
  ${icons.map((icon) => `<${icon}></${icon}>`).join("\n")}
  <style>
  main { display: flex; flex-wrap: wrap; }
  </style>
`;

const main = document.createElement("main");
main.innerHTML = html;

document.body.appendChild(main);
