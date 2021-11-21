const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const isDevelopment = true;

module.exports = [{
  mode: "development",
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.template.html",
    }),
    ...[isDevelopment && new ReactRefreshWebpackPlugin()].filter(Boolean)
  ],
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
          },
        },
      },
    ],
  }
}, {
  mode: "development",
  entry: path.join(__dirname, "src", "index2.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle2.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.template.html",
    }),
    ...[isDevelopment && new ReactRefreshWebpackPlugin()].filter(Boolean)
  ],
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
          },
        },
      },
    ],
  }
}];