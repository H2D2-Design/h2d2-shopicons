import svgo from "rollup-plugin-svgo";
import terser from "@rollup/plugin-terser";
import meta from "./dist/meta.json" with { type: "json" };

const { entryBundleFiles } = meta;

const files = Object.keys(entryBundleFiles);

export default files.map((file) => {
  return {
    input: entryBundleFiles[file],
    output: {
      file: `umd/${file}.js`,
      format: "umd",
    },
    plugins: [svgo(), terser()],
  };
});
