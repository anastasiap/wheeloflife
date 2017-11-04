"use strict";

angular.module("wheeloflife")
  .service("commonService", commonService);

function commonService () {
  var common = this;

  common.setGrade = function (category, grade) {
    category.grade = grade.grade;
  };
}
