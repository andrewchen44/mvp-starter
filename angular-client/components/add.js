angular.module('app')
.component('addAdventure', {
  bindings: {
    activity: '@',
    add: '&'
  },
  controller: function($http) {
    this.input = '';
    this.search = function() {
      $http.post('/', 'hi').then(function(responce){
        console.log(responce)
      });
    }
  },
  templateUrl: '/templates/add.html'
});