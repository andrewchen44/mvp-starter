var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/venplore");

var db = mongoose.connection;

db.on("error", function() {
  console.log("mongoose connection error");
})

db.on("open", function() {
  console.log("mongoose connected successfully");
})

var adventures = mongoose.Schema({
  Name: String,
  Category: String,
  Cost: Number,
  Effort: Number,
  Duration: Number,
  Outdoorsey: Number,
  Likes: Number 
})

var Adventure = mongoose.model("Adventure", adventures);

var addAdventure = function(name, category, cost, effort, duration, outdoorsey){
  var adventure = new Adventure({
    Name: name,
    Category: category,
    Cost: cost,
    Effort: effort,
    Duration: duration,
    Outdoorsey: outdoorsey,
    Likes: 0
  })
  adventure.save();
};

var randomAdventure = function() {
  return Adventure.find({});
}

var like = function(name, value) {
  Adventure.update({Name: 'boxing'}, {Likes: value}, {safe: true}, function(err, raw) {
    if (err) return handleError(err);
    console.log('the raw responce from mongo was', raw);

  });
};

module.exports.addAdventure = addAdventure;
module.exports.randomAdventure = randomAdventure;
module.exports.like = like;
