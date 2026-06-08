import serve from "rollup-plugin-serve";
import html from "@rollup/plugin-html";
import svgo from "rollup-plugin-svgo";
import terser from "@rollup/plugin-terser";
import meta from "./dist/meta.json" with { type: "json" };

const { entryIconFiles, webComponentNames } = meta;

const watchMode = process.env.ROLLUP_WATCH === "true";

export default {
  input: { index: "src/html.js", ...entryIconFiles },
  output: {
    dir: "es",
    format: "es",
  },
  plugins: [
    svgo(),
    terser(),
    html({
      title: "H2D2 Shopicons",
      meta: [
        { charset: "utf-8" },
        { name: "icons", content: webComponentNames },
      ],
    }),
    watchMode ? serve({ open: true, contentBase: "es" }) : undefined,
  ],
};
