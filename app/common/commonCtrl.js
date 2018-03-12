"use strict";

app.controller("commonCtrl", commonCtrl);

function commonCtrl (commonService, errorService, $http, customService, defaultService) {
  var common = this;

  common.showError = false;
  common.errorMessage = errorService.getErrorMessage();
  common.number = commonService.getNumber();
  common.isDefault = commonService.getDefault();
  common.formShown = defaultService.setFormState();
  common.grades = [];

  setCommonGrades ();

  common.hideErrorContainer = function () {
    common.showError = false;
  };

  common.setGrades = function (category, grade) {
    if (!category.name) {
      common.showError = true;
    } else {
      commonService.setGrade(category, grade);
    }
  };

  common.setCustom = function () {
    common.isDefault = false;
    common.formShown = true;
  };
  common.setDefault = function () {
    common.isDefault = true;
    common.formShown = false;
  };

  /* TODO move to services */
  common.date = new Date();

  function setCommonGrades () {
    return $http.get('data/grades.json').then(function(result) {
      common.grades = result.data;
      return common.grades;
    });
  }
}
