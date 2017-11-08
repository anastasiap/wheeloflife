"use strict";

app.service("errorService", setError);

function setError () {
  var error = this;

  error.getErrorMessage = function () {
    return "Please, fill all the titles first";
  };
}
