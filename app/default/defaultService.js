"use strict";

angular.module("wheeloflife")
  .service("defaultService", mainService);

function mainService($http) {
  var service = this;

  service.getDefaultGrades = function () {
    console.log('Default Service: load grades');
    return $http.get('data/grades.json').then(function(result) {
      return result.data;
    });
  };

  service.getDefaultCategories = function () {
    console.log('Default Service: load categories');
    return $http.get('data/categories.json').then(function(result){
      return result.data;
    });
  };

  service.setFormState = function(val) {
    return val;
  };
}
