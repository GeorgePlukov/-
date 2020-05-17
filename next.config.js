// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    //   "/about": { page: "/about" },
    };
  },
  //assetPrefix: '',
  assetPrefix: !debug ? "/georgeplukov/" : "",
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.loader === "babel-loader") {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });
    return config;
  } /*,
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    return config
  }, */,
};
