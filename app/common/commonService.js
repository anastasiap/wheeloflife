"use strict";

angular.module("wheeloflife")
  .service("commonService", commonService);

function commonService () {
  var common = this;

  common.getNumber = function () {
    return 0;
  };
  common.setFormHidden = function () {
    if (!common.number) {
      return true;
    }
  };

  common.setGrade = function (category, grade) {
    category.grade = grade.grade;

    category.activeStyle = "active-span";

    /*var localCopy = newGradesSet;
    var updatedSpans = localCopy.slice(localCopy.length - category.grade);

    console.log('updatedSpans', updatedSpans);*/

      /*var localCopy = service.categories;

      var updatedSpans = localCopy.slice(localCopy.length - category.grade);

      console.log('updatedSpans', updatedSpans);
      var newspans = localCopy.map(function(span){
        console.log(span);
        return span.activeStyle = "active-span";
      })

        console.log(category);
        var n = 0;
        while (updatedSpans.length) {
          console.log(n);
          updatedSpans[n].activeStyle = "active-span";
          n++;
        }

  */
  };
}
