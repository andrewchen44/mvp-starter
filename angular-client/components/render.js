angular.module('app')
.component('renderAdventure', {
  bindings: {
    adventure: '='
  },
  controller: function(like) {
    this.like = () => {
      this.adventure.Likes++;
      like.increase(this.adventure);
      console.log('like works');
    };
  },

  templateUrl: "/templates/render.html"
})
