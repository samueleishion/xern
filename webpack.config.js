const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require("path");
const srcPath = path.join(__dirname, 'src');

module.exports = {
  entry: {
    app: path.join(srcPath, 'app.jsx')
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./static/scrs"),
    publicPath: "",
  },
  watch: true,
  cache: false,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: ['src/components', 'src/modules', 'node_modules'],
    extensions: ['.js','.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
};
