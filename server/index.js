var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database');

var app = express();

app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules'));

app.post('/', function(req, res) {
  req.on('data', function(chunk){
    var data = JSON.parse(chunk);
    db.addAdventure(data.name, data.category, data.cost, data.effort, data.duration, data.outdoorsey);
  });
  res.send('post recieved');
});

app.get('/random', function (req, res) {
  console.log('get request recieved');
  res.send('get request recieved');
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});