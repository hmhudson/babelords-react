var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
});
var config = {
  context: path.resolve(__dirname, './app'),
   entry: './index.js', // entry point
   output: {
       path: path.resolve(__dirname, 'build'),
       filename: 'app.bundle.js'
      },
   devServer: {
         inline: true, // autorefresh
         port: 8080, // development port server
         headers: {
           'Access-Control-Allow-Origin': '*'
       },
      proxy: {
          '/api': {
              target: 'http://localhost:8000'
          }
      }
      },
  watch: true,
  resolve: {
      extensions: ['.js', '.jsx']
  },
   module: {
         loaders: [
            {
               test: /\.js(x|)?$/, // search for js files
               exclude: /node_modules/,
               loader: 'babel-loader',
   query: {
               presets: ['es2015', 'react'] // use es2015 and react
            }
         }
      ]
   },
   plugins: [HtmlWebpackPluginConfig]
}
module.exports = config;
