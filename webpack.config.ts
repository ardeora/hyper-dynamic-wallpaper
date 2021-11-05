import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';
import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';

const config: webpack.Configuration = {
  target: 'node',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'hyper-dynamic-wallpaper.js',
    libraryTarget: 'commonjs',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_classnames: true,
          keep_fnames: true,
        },
      }),
    ],
  },
  externals: [nodeExternals(), 'hyper/component', 'hyper/notify', 'hyper/decorate'],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

export default config;