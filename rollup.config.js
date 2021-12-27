import html from "@rollup/plugin-html";
import serve from "rollup-plugin-serve";
import svgo from "rollup-plugin-svgo";
import { uglify } from "rollup-plugin-uglify";
import { generateFiles } from "./src/index.js";

const { entryFiles, webComponentNames } = generateFiles();

const watchMode = process.env.ROLLUP_WATCH === "true";

export default {
  input: { index: "src/html.js", ...entryFiles },
  output: {
    dir: "dist",
    format: "es",
  },
  plugins: [
    html({
      title: "H2D2 Shopicons",
      meta: [
        { charset: "utf-8" },
        { name: "icons", content: webComponentNames },
      ],
    }),
    svgo(),
    uglify(),
    watchMode ? serve({ open: true, contentBase: "dist" }) : undefined,
  ],
};
