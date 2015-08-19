var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var querystring = require('querystring');

var port = 2000;
var baseUrl = 'http://localhost:' + port;

var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/../'));
app.use(bodyParser.json());

app.get('/', function(request, response) {
  response.redirect(baseUrl + '/controls.html');
});

app.get('/shoes', function(clientRequest, clientResponse) {
  io.emit('shoes');
  clientResponse.json(200, { "okay" : 200 });
  return;
});

app.get('/shirt', function(clientRequest, clientResponse) {
  io.emit('shirt');
  clientResponse.json(200, { "okay" : 200 });
  return;
});

http.listen(port, function() {
  console.log('App listening on', port);
});

io.on('connection', function(socket) {
  console.log('socket connection');
});
