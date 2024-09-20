import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { createFilter } from "@rollup/pluginutils";
import nodePolyfills from "rollup-plugin-polyfill-node";

function string(opts = {}) {
  if (!opts.include) {
    throw Error("include option should be specified");
  }

  const filter = createFilter(opts.include, opts.exclude);

  return {
    name: "string",

    transform(code, id) {
      if (filter(id)) {
        return {
          code: `export default ${JSON.stringify(code)};`,
          map: { mappings: "" },
        };
      }
    },

    renderChunk(code, chunk, outputOptions = {}) {
      return (
        `/*!
 * Live2D Widget
 * Buriburi Live2D Widget
 */
` + code
      );
    },
  };
}

export default {
  input: "./waifu-tips.js", 
  plugins: [
    nodeResolve({
      browser: true,
    }),
    commonjs(),
    nodePolyfills(),
    string({
      include: "**/*.svg",
    }),
  ],
    output: {
        file: "./dist/waifu-tips.js",
        format: "iife",
        name: "waifuTips",
    },
};