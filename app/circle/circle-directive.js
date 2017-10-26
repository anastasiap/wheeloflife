angular.module("wheeloflife")
  .directive("circle", setCircle);

  function setCircle () {
    return {
      templateUrl: 'circle/circle.html'
    }
  }
