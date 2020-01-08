export default {
    proxy: {
        "/api": {
          target: "http://localhost:7001",
          changeOrigin: true,
          // pathRewrite: { "^/api": "" }
        }
      },
};

// module.exports = {
//   extraBabelPlugins: [
//     ["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }]
//   ],

//   proxy: {
//     "/api": {
//       target: "http://jsonplaceholder.typicode.com/",
//       changeOrigin: true,
//       pathRewrite: { "^/api": "" }
//     }
//   },
//   "disableCSSModules":true
// };
