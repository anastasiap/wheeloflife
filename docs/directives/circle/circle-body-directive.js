"use strict";

app.directive("circleBody", setCircleBody);

function setCircleBody () {
  function link(scope, element) {
    setTimeout(function () {
      var wrapper = element.children();

      wrapper.on("click", function() {
        wrapper.removeClass("active-span");

        var value = 9 - scope.category.grade;

        for (var i = 9; i > value; i--) {
          angular.element(wrapper[i]).addClass("active-span");
        }
      });
    }, 1000);
  }

  return {
    templateUrl: 'directives/circle/circle-body.html',
    link: link
  }
}
