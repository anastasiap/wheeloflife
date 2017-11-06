"use strict";

angular.module("wheeloflife")
  .directive("categories", setCategories);

function setCategories () {
  function link(scope, element, attr) {
    console.log("link scope", scope);
    console.log("link element", element);
    console.log("link attr", attr);

  }

  return {
    templateUrl: 'form/form.html',
    link: link
  };
}
