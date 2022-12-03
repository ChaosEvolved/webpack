const { merge } = require("webpack-merge");
const path = require("path");
const config = require("./webpack.config");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(config, {
  mode: "development",

  devtool: "inline-source-map",

  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },

    static: {
      directory: path.resolve(__dirname, "public"),
    },
    
    open: true,
    hot: false,
    liveReload: true,
    port: 3000,
    compress: true,
    historyApiFallback: true,
  },

  output: {
    path: path.resolve(__dirname, "public"),
    clean:true
  },

  plugins: [new CleanWebpackPlugin()],
});
