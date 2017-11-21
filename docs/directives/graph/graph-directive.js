'use strict';

app.directive("graph", setGraph);

function setGraph () {
  return {
    templateUrl: "directives/graph/graph.html"
  };
}
