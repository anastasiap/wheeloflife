"use strict";

app.directive("circle", setCircle);

function setCircle () {
  return {
    templateUrl: 'directives/circle/circle.html'
  };
}
