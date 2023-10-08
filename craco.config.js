const path = require("path");
const Icons = require("unplugin-icons/webpack");
const IconsResolver = require("unplugin-icons/resolver");
const AutoImport = require("unplugin-auto-import/webpack");
// import AutoImport from 'unplugin-auto-import/vite'
module.exports = {
  webpack: {
    configure: {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
      },
    },
    plugins: {
      add: [
        AutoImport({
          resolvers: [
            IconsResolver({
              prefix: "Icon",
              extension: "jsx",
            }),
          ],
        }),
        Icons({
          compiler: "jsx",
          jsx: "react",
        }),
      ],
    },
  },
};
