"use strict";

angular.module("wheeloflife")
  .directive("circle", setCircle);

  function setCircle () {
    function link(scope, element, attr) {
      console.log("link scope", scope);
      console.log("link element", element);
      console.log("link attr", attr);

    }

    return {
      templateUrl: 'circle/circle.html',
      link: link
    }
  }
