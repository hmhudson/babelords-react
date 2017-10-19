var path = require('path');
var config = {
   entry: './app/main.jsx', // entry point
   output: {
         filename: 'index.js', // place where bundled app will be served
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
   }
}
module.exports = config;
