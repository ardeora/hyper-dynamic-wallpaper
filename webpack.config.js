const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  target: 'node',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname + "/dist"),
    filename: 'my-hyper-app.js',
    libraryTarget: 'commonjs'
  },
  optimization: {
    minimize: true,
    minimizer: [
        new TerserPlugin({
            terserOptions: {
                keep_classnames: true,
                keep_fnames: true
            }
          })
        ]
  },
  plugins: [ new webpack.DefinePlugin({ 'global.GENTLY': false }) ],
  externals: [ nodeExternals(), 'hyper/component', 'hyper/notify', 'hyper/decorate' ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
}
