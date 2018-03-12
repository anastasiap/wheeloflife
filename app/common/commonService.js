"use strict";

app.service("commonService", commonService);

function commonService ($http) {
  var service = this;

  service.getDefaultGrades = function () {
    return $http.get('data/grades.json');
  };

  service.getNumber = function () {
    return 0;
  };

  service.getFormHidden = function () {
    if (!commonCtrl.number && !commonCtrl.isDefault) {
      return true;
    }
  };
  
  service.getDefault = function() {
    return true;
  };

  service.setDefault = function(val) {
    return val;
  };

  service.setGrade = function (category, grade) {
    category.grade = grade.grade;
  };

  service.setCommonGrades = function () {
    return $http.get('data/grades.json').then(function(result) {
      return result.data;
    });
  };
}
