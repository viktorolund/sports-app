import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import babelOptions from './config/babelConfig';

export default {
  entry: [
    'babel-polyfill',
    './src/index'
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: babelOptions
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(jpe?g|png|ico|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: "file-loader"
      }
    ]
  },
  plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
      new HtmlWebpackPlugin({
          inject: false,
          template: './src/index.html'
      }),
      new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin()
  ]
};
