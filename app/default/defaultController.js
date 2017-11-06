'use strict';

angular.module("wheeloflife")
  .controller("defaultController", setDefaultState);

  function setDefaultState (categories, grades) {
    var defaultState = this;


    defaultState.categories = categories;
    defaultState.grades = grades;

  }

