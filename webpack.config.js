import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const __DEV__ = process.env.NODE_ENV !== 'production';

const extractLess = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: !__DEV__
});

const entry = [];
const plugins = [];

if (!__DEV__) {
  entry.push(
    'babel-polyfill',
    './src/index'
  );

  const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production'), //This global makes sure React is built in prod mode. https://facebook.github.io/react/downloads.html
    __DEV__: false // potentially useful for feature flags. More info: https://github.com/petehunt/webpack-howto#6-feature-flags
  };

  plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.DefinePlugin(GLOBALS),
      extractLess,
      new webpack.optimize.UglifyJsPlugin()
  );
} else {
  entry.push(
    'babel-polyfill',
    'webpack-hot-middleware/client?reload=true',
    './src/index'
  );

  plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
      extractLess,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
  );
}

export default {
  devtool: __DEV__ ? 'cheap-eval-source-map' : false,
  entry: entry,
  target: 'web',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __DEV__ ? './src' : './dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
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
        // test: /\.less$/,
        // use: extractLess.extract({
        //     use: [{
        //         loader: "css-loader"
        //     }, {
        //         loader: "less-loader"
        //     }],
        //     // use style-loader in development
        //     fallback: "style-loader"
        // })
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: "file-loader"
      }
    ]
  },
  plugins: plugins
};
