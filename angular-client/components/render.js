angular.module('app')
.component('renderAdventure', {
  bindings: {
    adventure: '='
  },
  controller: function() {
    this.like = () => {
      this.adventure
      console.log('like works');
    };
    this.like();
  },

  templateUrl: "/templates/render.html"
})
