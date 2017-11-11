angular.module('app')
.component('addAdventure', {
  controller: function($http) {
    this.name;
    this.category;
    this.cost;
    this.effort;
    this.duration;
    this.outdoorsey;
    this.search = function() {
      $http.post('/', this).then(function(responce){
        console.log(responce)
      }); 
    }
  },
  templateUrl: '/templates/add.html'
});