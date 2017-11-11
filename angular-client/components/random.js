angular.module('app')
.component('randomAdventure', {
  controller: function($http) {

    this.random = function(){
      $http.get('/random', this).then(function(responce, error){
        console.log(responce);
      });
    }
  },
  templateUrl: "/templates/random.html"
});