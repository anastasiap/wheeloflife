"use strict";

angular.module("wheeloflife")
  .controller("customCtrl", customController);

function customController (defaultService, customService) {
  var custom = this,
      grades = defaultService.getDefaultGrades();

  common.setNumber = function (num) {
    common.number = num;
    common.categoriesTemplate = populateCategories(num);

    return num;
  };

  function populateCategories (num) {
    var cstmCategories = [];

    if (!common.isDefault) {
      var names = defaultService.getDefaultCategories().then(function(grades) {
        return grades;
      });
    }

    for (var i = 0; i < num; i++ ) {
      var newObj =  {
        categoryName: "",
        bgColor: colors[i],
        activeStyle: "",
        grade: 0
      };

      cstmCategories.push(newObj);
    }

    return cstmCategories;
  }

};
