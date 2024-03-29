import fs, { writeFileSync } from "fs";
import path from "path";

function normalize(icon) {
  return icon.replace(/[^a-zA-Z0-9]/g, "");
}

function iconTemplate(style, icon) {
  const styleLower = style.toLowerCase();
  const iconNormalized = normalize(icon);
  const iconLower = iconNormalized.toLowerCase();
  const className = `${iconNormalized}${style}`;
  const webComponentName = `shopicon-${styleLower}-${iconLower}`;

  const content = `/* GENERATED FILE - DON'T EDIT MANUALLY */
import svg from "../../SVG/${style}/Shopicons_${style}_${icon}.svg";
import "../../src/base.js";

class ${className} extends HTMLElement {
  connectedCallback() {
    this.setAttribute("data-shopicon", true);
    this.innerHTML = svg;
  }
}

window.customElements.define("${webComponentName}", ${className})
`;
  return { content, webComponentName };
}

function bundleTemplate(icons) {
  return `/* GENERATED FILE - DON'T EDIT MANUALLY */
${icons.map((icon) => `import "./${icon}.js";`).join("\n")}
`;
}

function ensureDirectoryExistence(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  }
  fs.mkdirSync(dirname, { recursive: true });
}

function writeIconFile(style, icon) {
  const file = `${style.toLowerCase()}/${normalize(icon).toLowerCase()}`;
  const filepath = path.resolve(`dist/${file}.js`);
  const { content, webComponentName } = iconTemplate(style, icon);
  ensureDirectoryExistence(path.dirname(filepath));
  fs.writeFileSync(filepath, content, "utf-8");
  return { file, filepath, webComponentName };
}

function writeBundleFile(style, icons) {
  const file = style.toLowerCase();
  const filepath = path.resolve(`dist/${file}.js`);
  const content = bundleTemplate(icons);
  ensureDirectoryExistence(path.dirname(filepath));
  fs.writeFileSync(filepath, content, "utf-8");
  return { file, filepath };
}

export function generateFiles() {
  const entryBundleFiles = {};
  const entryIconFiles = {};
  const webComponentNames = [];
  ["Bold", "Filled", "Light", "Regular"].forEach((style) => {
    const styleFiles = [];
    fs.readdirSync(path.resolve(`SVG/${style}`))
      .filter((file) => file.startsWith("Shopicons"))
      .map((file) => {
        const [, , iconWithExt] = file.split("_");
        const [icon] = iconWithExt.split(".");
        return icon;
      })
      .forEach((icon) => {
        const { file, filepath, webComponentName } = writeIconFile(style, icon);
        entryIconFiles[file] = filepath;
        webComponentNames.push(webComponentName);
        styleFiles.push(file);
      });
    const { file, filepath } = writeBundleFile(style, styleFiles);
    entryBundleFiles[file] = filepath;
  });
  return { entryBundleFiles, entryIconFiles, webComponentNames };
}

const meta = generateFiles();

fs.writeFileSync(
  path.resolve("dist/meta.json"),
  JSON.stringify(meta, " ", " "),
  "utf-8"
);
