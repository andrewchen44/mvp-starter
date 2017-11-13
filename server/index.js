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

app.post('/likes', (req, res) => {
  req.on('data', function(chunk) {
    var data = JSON.parse(chunk);
    console.log(data);
    db.like(data.Name, data.Likes);
  })
});
0
app.get('/random', function (req, res) {
  var data = db.randomAdventure();
  var responce;
  data.then(function(docs){
    res.send(docs);
  })
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});