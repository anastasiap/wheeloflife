(function(){

  angular
    .module('wheeloflife')
    .controller('defaultCircle', defaulCtrl);

    function defaulCtrl () {
      var vm = this;

      vm.activeCircle = true;
    }
})();
