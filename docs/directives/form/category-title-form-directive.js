"use strict";

app.directive("categorytitles", setCategories);

function setCategories () {
  return {
    templateUrl: 'directives/form/category-title-form.html'
  };
}
