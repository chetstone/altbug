var path = require('path');
var webpack = require('webpack');
var countCloud = 'CountFirebase';

/* Change resolve: alias: to point to your alt repo, 
 * or remove it to use node_modules alt */
module.exports = {
    devtool: 'eval',
    entry: [ "./src/App.jsx"],
    output: {
        path: path.join(__dirname, "www/assets/"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /.*\.jsx?$/, loaders: ['babel-loader'],
              include: path.join(__dirname, 'src')} ]
    },
    resolve: {
        alias: { alt: "/Users/chet/github/aalt"},
        extensions: ['', '.js', '.jsx']
    },
}
