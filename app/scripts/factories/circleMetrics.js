(function(){

  angular.module("wheeloflife")
    .factory("circleMetrics", circleMetrics);

  function circleMetrics () {
    var circleMrt = {

      circleActive: false

    };


    return circleMrt;
  };

})();
