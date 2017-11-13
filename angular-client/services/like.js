angular.module('app')
  .service('like', function($http) {
    this.increase = function (name) {
      $http.post('/likes', name);
    }
  });