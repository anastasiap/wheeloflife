"use strict";

angular.module("wheeloflife")
  .service("circleService", circleService);

function circleService (defaultService) {
  var circle = this;

  function extract (result) {
    return result.data;
  };

  circle.categories = defaultService.getDefaultCategories().then(extract);
  circle.grades = defaultService.getDefaultGrades().then(extract);
}
