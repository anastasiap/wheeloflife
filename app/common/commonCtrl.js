"use strict";

angular.module("wheeloflife")
  .controller("commonCtrl", commonCtrl);

function commonCtrl (commonService, $scope) {
  var common = this;

  common.number = commonService.getNumber();
  common.isDefault = true;
  common.formShown = commonService.setFormHidden();

  common.extract = function (result) {
    return result.data;
  };

  common.setGrades = function (category, grade) {
    commonService.setGrade(category, grade);
  };

  common.setCustom = function () {
    common.isDefault = false;
    common.formShown = true;
  };
  common.setDefault = function () {
    common.isDefault = true;
    common.formShown = false;
  };

  common.date = new Date();
}
