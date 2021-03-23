const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/web/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
    library: "flowgame",
    libraryTarget: "umd",
  },

  target: "web",
  mode: "development",
  devtool: "inline-source-map",

  devServer: {
    publicPath: "/build/"
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      }
    ],
  },

  resolve: {
    extensions: [ ".ts", ".tsx", ".js" ],
  },

  plugins: [
    // new CopyPlugin({
    //   patterns: [
    //     { from: "scripts", to: "build" },
    //   ],
    // }),

    // new HtmlWebpackPlugin({
    //   template: "index.html"
    // })
  ]
};