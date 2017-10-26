(function(){

  angular
    .module("wheeloflife")
    .controller("dafaultCircleController", circleCtrl);

  circleCtrl.$inject = ['circleMetrics'];

  function circleCtrl(circleMetrics){
      var vm = this;

      vm.circleData = circleData;
      vm.gradesScale = gradesScale;
      vm.currentGrade = 0;
      vm.defaultCircle = false;
      vm.setCategoryGrade = setCategoryGrade;
      vm.activateCustomCircle = toggleDefaultCircle;

    function setCategoryGrade (category, grade, index) {
      category.grade = grade.index;
      category.gradeColor = category.color;

      grade.bgColor = "rgba(0,0,0, 0.6)";

      console.log(grade);
    };

    function toggleDefaultCircle () {
      vm.defaultCircle = true;
    };
  };

  var gradesScale = [
    {
      index: 10,
      bgColor: "rgba(0,0,0, 0)"
    },{
      index: 9,
      bgColor: "rgba(0,0,0, 0)"
    },{
      index: 8,
      bgColor: "rgba(0,0,0, 0)"
    },{
      index: 7,
      bgColor: "rgba(0,0,0, 0)"
    },{
      index: 6,
      bgColor: "rgba(0,0,0, 0)"
    },{
      index: 5,
      bgColor: "rgba(0,0,0, 0)"
    },{
      index: 4,
      bgColor: "rgba(0,0,0, 0)"
    },{
      index: 3,
      bgColor: "rgba(0,0,0, 0)"
    },{
      index: 2,
      bgColor: "rgba(0,0,0, 0)"
    },{
      index: 1,
      bgColor: "rgba(0,0,0, 0)"
    }
  ]

  var circleData = [
    {
      categoryName: "Image",
      grade: 0,
      color: "pink",
      gradeColor: ""
    },{
      categoryName: "Economics",
      grade: 0,
      color: "green",
      gradeColor: ""
    },{
      categoryName: "Education",
      grade: 0,
      color: "yellow",
      gradeColor: ""
    },{
      categoryName: "Family",
      grade: 0,
      color: "blue",
      gradeColor: ""
    },{
      categoryName: "Creative / Art",
      grade: 0,
      color: "pink",
      gradeColor: ""
    },{
      categoryName: "Health",
      grade: 0,
      color: "green",
      gradeColor: ""
    },{
      categoryName: "Love",
      grade: 0,
      color: "yellow",
      gradeColor: ""
    },{
      categoryName: "Sex",
      grade: 0,
      color: "blue",
      gradeColor: ""
    },{
      categoryName: "Altruism",
      grade: 0,
      color: "pink",
      gradeColor: ""
    },{
      categoryName: "Work",
      grade: 0,
      color: "green",
      gradeColor: ""
    },{
      categoryName: "Friendship",
      grade: 0,
      color: "yellow",
      gradeColor: ""
    },{
      categoryName: "Spiritual",
      grade: 0,
      color: "blue",
      gradeColor: ""
    }
  ]

})();
