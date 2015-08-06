var path = require('path');
var webpack = require('webpack');
var countCloud = 'CountFirebase';
/* Note this file is a near-copy of webpack.fb.config.js */

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
            { test: /.*\.jsx?$/, loaders: ['react-hot', 'babel-loader'],
              include: path.join(__dirname, 'src')} ]
    },
    resolve: {
        alias: { alt: "/Users/chet/github/aalt"},
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.DefinePlugin({
            WEBPACK: true
        })]
}
