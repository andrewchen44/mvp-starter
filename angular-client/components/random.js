angular.module('app')
.component('randomAdventure', {
  controller: function($http) {
    this.adventure;

    this.random = function(){
      $http.get('/random', this).then(function(responce, error){
        var number = Math.floor(Math.random() * responce.data.length) + 0;
        this.adventure = responce.data[number];
      });
    }
  },
  templateUrl: "/templates/random.html"
});