const path = require("path");
const { merge } = require("webpack-merge");
const config = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(config, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "public"),
    clean:true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Boilerplate",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
});
