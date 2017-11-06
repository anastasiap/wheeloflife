"use strict";

angular.module("wheeloflife")
  .controller("customCtrl", customController);

function customController (grades, defaultService, customService) {
  var custom = this,
      colors = ["pink", "green", "blue", "yellow", "deep-purple", "indigo", "lime", "orange", "light-green", "red", "light-blue", "blue-darken"];


  custom.categoriesTemplate = [];
  custom.grades = grades;


  custom.setCategoriesNumber = function (num) {
    custom.categoriesTemplate = populateCategories(num);
  };

  custom.titles = [];
  custom.setName = function(name, $event) {
    console.log($event);


    if (name) {
      var newObj =  {
        name: name,
        bgColor: "",
        activeStyle: "",
        grade: 0
      };

      custom.titles.push(newObj);


    }
  };

  function populateCategories (num) {
    var cstmCategories = [];

    for (var i = 0; i < num; i++ ) {
      var newObj =  {
        name: "",
        bgColor: colors[i],
        activeStyle: "",
        grade: 0
      };

      cstmCategories.push(newObj);
    }

    console.log(cstmCategories);

    return cstmCategories;
  }

};
