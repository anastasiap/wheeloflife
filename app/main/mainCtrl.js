'use strict';

angular.module("wheeloflife")
  .controller("mainCtrl", mainPage);

  function mainPage () {
    var main = this;

    main.grades = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    main.categories = [
      {
        categoryName: "Image",
        bgColor: 'pink',
        grade: 0
      },{
        categoryName: "Image",
        bgColor: 'green',
        grade: 0
      },{
        categoryName: "Image",
        bgColor: 'blue',
        grade: 0
      },{
        categoryName: "Image",
        bgColor: 'yellow',
        grade: 0
      },{
        categoryName: "Image",
        bgColor: 'pink',
        grade: 0
      },{
        categoryName: "Image",
        bgColor: 'green',
        grade: 0
      },{
        categoryName: "Image",
        bgColor: 'blue',
        grade: 0
      },{
        categoryName: "Image",
        bgColor: 'yellow',
        grade: 0
      },{
        categoryName: "Image",
        bgColor: 'pink',
        grade: 0
      },{
        categoryName: "Image",
        bgColor: 'green',
        grade: 0
      },{
        categoryName: "Image",
        bgColor: 'blue',
        grade: 0
      },{
        categoryName: "Image",
        bgColor: 'yellow',
        grade: 0
      }
    ]
  }

