const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    vendor: [
      "react",
      "react-dom",
    ],
    scorer: "./src/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/[name].js",
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".scss", ".sass", ".less", ".png", ".woff", ".woff2", ".eot", ".ttf", ".svg"],
    modules: ["src", "node_modules"],
  },

  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    port: 8080,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: "pre",
        loader: "tslint-loader",
        exclude: /(node_modules)/,
        options: {
          typeCheck: true,
          emitErrors: true
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("css-loader")
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.png?$/,
        loader: "file-loader?publicPath=../&name=img/[name].[ext]"
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)$/,
        loader: "file-loader?publicPath=../&name=fonts/[name].[ext]"
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      title: "Ticket to Ride Scorer",
      inject: false,
      filename: "index.html",
      template: "index.html",
      hash: true
    })
  ]
};
