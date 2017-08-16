import webpack from "webpack";
import path from "path";

export default {
  devtool: "cheap-eval-source-map",
  entry: {
    vendor: ["jquery"],
    app: [
      "babel-polyfill",
      "webpack-hot-middleware/client?reload=true",
      "./src/index"
    ]
  },
  target: "web",
  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: "/",
    filename: "[name].js"
  },
  devServer: {
    contentBase: "./src"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: true
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "less-loader" // compiles Less to CSS
          }
        ]
      },
      {
        test: /\.(jpe?g|png|ico|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: "file-loader"
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "vendor.js",
      minChunks: Infinity
    })
  ]
};
