'use strict';

angular.module("wheeloflife")
  .directive("graph", setGraph);

  function setGraph () {
    return {
      templateUrl: "graph/graph.html"
    }
  }
