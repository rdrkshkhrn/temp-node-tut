// var url = 'http://mylogger.io/log';

// function log(message)
// {
//     console.log(message);
// }

// module.exports.log=log;
// //module.exports.endpoint=url;

var http = require('http');
var dt = require('./app');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are : " + dt.myDateTime());
  res.end();
}).listen(8000);