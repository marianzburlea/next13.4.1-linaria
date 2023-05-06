// next.config.js
const withLinaria = require("next-with-linaria");

/** @type {import('next-with-linaria').LinariaConfig} */
const config = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
};
module.exports = withLinaria(config);
