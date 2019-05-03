'use strict';

app.controller("defaultController", setDefaultState);

function setDefaultState (categories, grades, formShown, defaultService) {
  var defaultState = this;

  defaultState.categories = categories;
  defaultState.grades = grades;

  defaultState.setFormState = function (formShown) {
    defaultService.setFormState(formShown);
  };

}

