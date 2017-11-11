angular.module('app')
.controller('AppCtrl', function() {
  this.adventure = 'swimming';
  this.add = function() {console.log('hi')};
})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});