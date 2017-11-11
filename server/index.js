var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database');

var app = express();

app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules'));

app.post('/', function(req, res) {
  req.on('data', function(chunk){
    var data = JSON.parse(chunk);
    console.log(data);
    db.addAdventure(data.name, data.category, data.cost, data.effort, data.duration, data.outdoorsey);
  });
  res.send('post recieved');
});

app.get('/items', function (req, res) {
  // items.selectAll(function(err, data) {
  // //   if(err) {
  // //     res.sendStatus(500);
  // //   } else {
  // //     res.json(data);
  // //   }
  // });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});