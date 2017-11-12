angular.module('app')
.component('randomAdventure', {
  controller: function($http) {
    this.adventure =[];


    this.random = function() {
      var adventure = this.adventure;
      $http.get("/random").then(function(responce, error) {
        var number = Math.floor(Math.random() * responce.data.length) + 0;
        adventure = responce.data[number];
      });
    };

  },
  templateUrl: "/templates/random.html"
});