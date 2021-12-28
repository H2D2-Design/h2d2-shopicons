import svgo from "rollup-plugin-svgo";
import { uglify } from "rollup-plugin-uglify";
import { entryBundleFiles } from "./dist/meta.json";

const files = Object.keys(entryBundleFiles);

export default files.map((file) => {
  return {
    input: entryBundleFiles[file],
    output: {
      file: `umd/${file}.js`,
      format: "umd",
    },
    plugins: [
      svgo(),
      uglify(),
    ],
  };
});
