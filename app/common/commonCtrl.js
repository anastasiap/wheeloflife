"use strict";

angular.module("wheeloflife")
  .controller("commonCtrl", commonCtrl);

function commonCtrl (commonService) {
  var common = this,
      colors = ["pink", "green", "blue", "yellow", "deep-purple", "indigo", "lime", "orange", "light-green", "red"];

  common.number = 12;
  common.isDefault = true;

  common.extract = function (result) {
    return result.data;
  };

  common.setGrades = function (category, grade) {
    commonService.setGrade(category, grade);
  };

  common.setCustom = function () {
    common.isDefault = "false";
  };
  common.setDefault = function () {
    common.isDefault = "true";
  };
}
