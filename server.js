var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var querystring = require('querystring');

var baseUrl = 'https://sheltered-fjord-8956.herokuapp.com';

var app = express();
app.set('port', (process.env.PORT || 2000));
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/../'));
app.use(bodyParser.json());

app.get('/', function(request, response) {
  response.redirect('/controls.html');
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

http.listen(app.get('port'), function() {
  console.log('App listening on', app.get('port'));
});

io.on('connection', function(socket) {
  console.log('socket connection');
});
