const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    "ticket-to-ride-scorer": "./src/main.less"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].css"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".less"],
    modules: ["src", "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "css-loader",
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("css-loader!less-loader")
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("ticket-to-ride-scorer.css"),
  ]
}