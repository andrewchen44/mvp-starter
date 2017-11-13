angular.module('app')
.component('renderAdventure', {
  bindings: {
    adventure: '='
  },
  controller: function(like) {
    this.like = () => {
      this.adventure.Likes++;
      like.increase(this.adventure);
    };
  },
  templateUrl: "/templates/render.html"
})
