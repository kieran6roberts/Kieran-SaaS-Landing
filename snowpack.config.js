
/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  exclude: [
    "**/node_modules/**/*", 
    "**/*.scss",
    "**/*.config.js",
    "**/*.md",
    "**/*.lock"
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: "es2017"
  },
  plugins: [
    "@snowpack/plugin-postcss",
    "@snowpack/plugin-webpack",
  ],
  packageOptions: {
    htmlMinifierOptions: true
  },
  devOptions: {
    open: "firefox"
  },
  buildOptions: {
    clean: true
  },
};
