//Plugin to automatically replace index.html for the production version of our app.
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/views/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
    //Entry point for application
    entry: [
        './app/views/index.js'
    ],
    module: {
        //What webpack will affect, exclude
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    },
    output: {
        //Output file and directory
        filename: "index_bundle.js",
        path: __dirname + '/dist'
  },
  plugins: [HTMLWebpackPluginConfig]
};
