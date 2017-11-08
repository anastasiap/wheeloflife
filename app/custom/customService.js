"use strict";

app.service("customService", customService);

function customService () {
  var service = this,
      colors = ["pink", "green", "blue", "yellow", "deep-purple", "indigo", "lime", "orange", "light-green", "red", "light-blue", "blue-darken"];;

  function Category (name, bgColor, activeStyle, grade) {
    this.name = name;
    this.bgColor = bgColor;
    this.activeStyle = activeStyle;
    this.grade = grade;
  }

  service.createNewCategory = function (name, bgColor, activeStyle, grade) {
    var category = new Category(name, bgColor, activeStyle, grade);

    return category;
  };

  service.populateCategories = function (num) {
    var customCategories = [];

    for (var i = 0; i < num; i++ ) {
      customCategories.push(service.createNewCategory("", colors[i], "", 0));
    }

    return customCategories;
  };
}
