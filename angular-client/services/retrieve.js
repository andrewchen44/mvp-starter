angular.module('app')
.service('retrieve', function($http) {

  this.retrieve = function(params, callback) {
    return $http.get('/random').then(function successCallback(data) {
      callback(data);
    });
  }

});