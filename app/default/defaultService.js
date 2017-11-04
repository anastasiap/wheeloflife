"use strict";

angular.module("wheeloflife")
  .service("defaultService", mainService);

function mainService($http) {
  var service = this;

  function extract (result) {
    return result.data;
  }

  service.getDefaultGrades = function () {
    console.log('Default Service: load default grades');
    return $http.get('data/grades.json');
  };

  service.getDefaultCategories = function () {
    console.log('Default Service: load default categories');
    return $http.get('data/categories.json');
  };

  //TODO http req for categories
  /*service.getDefaultCategories = function () {
    console.log('load default categories');
    return [
      {
        categoryName: "Image",
        bgColor: 'pink',
        activeStyle: "",
        grade: 0
      },{
        categoryName: "Image",
        bgColor: 'green',
        activeStyle: '',
        grade: 0
      },{
        categoryName: "Image",
        bgColor: 'blue',
        activeStyle: '',
        grade: 0
      },{
        categoryName: "Image",
        bgColor: 'yellow',
        activeStyle: "",
        grade: 0
      },{
        categoryName: "Image",
        bgColor: 'pink',
        activeStyle: "",
        grade: 0
      },{
        categoryName: "Image",
        bgColor: 'green',
        activeStyle: "",
        grade: 0
      },{
        categoryName: "Image",
        bgColor: 'blue',
        activeStyle: "",
        grade: 0
      },{
        categoryName: "Image",
        bgColor: 'yellow',
        activeStyle: "",
        grade: 0
      },{
        categoryName: "Image",
        bgColor: 'pink',
        activeStyle: "",
        grade: 0
      },{
        categoryName: "Image",
        bgColor: 'green',
        activeStyle: "",
        grade: 0
      },{
        categoryName: "Image",
        bgColor: 'blue',
        activeStyle: "",
        grade: 0
      },{
        categoryName: "Image",
        bgColor: 'yellow',
        activeStyle: "",
        grade: 0
      }
    ];
  };*/



};
