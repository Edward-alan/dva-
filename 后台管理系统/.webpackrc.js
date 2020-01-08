const path = require("path");

const resolve = src => {
  return path.resolve(__dirname, "./", src);
};

module.exports = {
  alias: {
    "@": resolve("src")
  },

  env: {
    development: {
      publicPath: "/"
    },
    // manifest: {
    //   "basePath":'/app/'
    // },
    production: {
      publicPath: "/public/dist/",
      chunkFilename: "[hash].[id].js"
    }
  },
  html: {
    template: "./src/index.ejs"
    // 'title':"考试平台",
    // 'filename':"index.html"
  },

  extraBabelPlugins: [
    ["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }]
  ],

  proxy: {
    "/api": {
      target: "http://localhost:7001",
      changeOrigin: true,
      pathRewrite: { "^/api": "" }
    }
  },

  define: {
    "process.env": {},
    "process.env.NODE_ENV": process.env.NODE_ENV,
    "process.env.API_ENV": process.env.API_ENV
  }
};
