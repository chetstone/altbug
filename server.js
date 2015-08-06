var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.hot.config.js');

/* --- a proxy for using with react-router --- 
 http://stackoverflow.com/questions/26203725/how-to-allow-for-webpack-dev-server-to-allow-entry-points-from-react-router
*/

var express = require('express');
var proxy = require('proxy-middleware');
var url = require('url');

/* --------your proxy---------------------- */
var app = express();
/* proxy the request for static assets */
app.use('/assets', proxy(url.parse('http://localhost:3001/assets/')));

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});             

var server = new WebpackDevServer(webpack(config), {
    contentBase: path.join(__dirname, "public"),
    publicPath: 'http://localhost:3001/assets/',
    hot: true,
    stats: {colors: true},
    /*     headers: { "X-Custom-Header": "yes" }, */
    noInfo: false,
    quiet: false,
    historyApiFallback: true
});

server.listen(3001, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
});

app.listen(8081);
    
console.log('Listening at localhost:8081/webpack-dev-server/');
