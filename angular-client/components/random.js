angular.module('app')
.component('randomAdventure', {
  controller: function(retrieve) {
    this.adventure = [];

    this.retrieve = retrieve.retrieve;

    this.update = (adventures) => {
      var number = Math.floor(Math.random() * adventures.data.length) + 0;
      this.adventure.push(adventures.data[number]);
      console.log(this.adventure);
    };

    this.retrieve({}, 
      (adventures) => {
      this.update(adventures);
      }
    );
  },
  templateUrl: "/templates/random.html"
});