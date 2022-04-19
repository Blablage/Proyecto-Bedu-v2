const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  experiments: {
    topLevelAwait: true
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "images", to: "images" },
    ]}),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      // "style-loader" -> Creates `style` nodes from JS strings
      // "css-loader" -> Translates CSS into CommonJS
      // "sass-loader" -> Compiles Sass to CSS
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource'},
      { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader',"sass-loader",]},
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}