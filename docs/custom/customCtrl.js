"use strict";

app.controller("customCtrl", customController);

function customController (grades, formShown, customService) {
  var custom = this;

  custom.categoriesTemplate = [];
  custom.grades = grades;
  custom.hideFields = false;
  custom.formShown = formShown;

  custom.setCategoryTitle = function(name, $event, $index, number) {
    custom.categoriesTemplate[$index].name = name;

    if ($index == number-1) {
      Object.keys(custom.categoriesTemplate).forEach(function(key) {
        if (custom.categoriesTemplate[key]["name"] === "") {
          custom.hideFields = false;
          return custom.hideFields;
        } else {
          custom.hideFields = true;
        }
      });
    }
  };

  custom.setCategoriesNumber = function (num) {
    custom.hideFields = false;
    custom.categoriesTemplate = customService.populateCategories(num);
  };
}
