var path = require("path");
var config = require("./webpack.config.js");
var webpack = require("webpack");
/* require("jquery"); */

config.entry.push("webpack-dev-server/client?http://localhost:3001",
                  "webpack/hot/dev-server"); 

config.output = { filename: "bundle.js", // this file is served directly by webpack
                  path: path.join(__dirname, "public/assets/"),
                  publicPath: config.output.publicPath};

config.plugins.push = [
       new webpack.HotModuleReplacementPlugin(),
       new webpack.NoErrorsPlugin()
       ];
config.devtool = "#inline-source-map";

module.exports = config;
