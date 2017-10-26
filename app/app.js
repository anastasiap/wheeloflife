'use strict';

angular.module("wheeloflife", [
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('/', {
        url:'/',
        templateUrl: 'main/default.html',
        controller: 'mainCtrl',
        controllerAs: 'main'
      })
  });

