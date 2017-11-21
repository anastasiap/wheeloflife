"use strict";

app.directive("errorContainer", setError);

function setError () {
  return {
    templateUrl: 'directives/error/error.html'
  };
}
