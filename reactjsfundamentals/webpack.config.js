//Plugin to automatically replace index.html for the built version of our app.
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
    //Entry point for application
    entry: [
        '.app/index.js'
    ],
    module: {
        //What webpack will affect, exclude
        loaders: [
            {test: /\.coffee$/, exclude: /node_modules/, loader: "coffee-loader"}
        ]
    },
    output: {
        //Output file and directory
        filename: "index_bundle.js",
        path: __dirname + '/dist'
  },
}
