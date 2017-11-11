var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database');

var app = express();

app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules'));

app.post('/', function(req, res) {
  // db.addAdventure('dancing', 'physical', 4, 7, 5, 9);
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