"use strict";

var app = angular.module("wheeloflife", [
    "ui.router"
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('default');

    $stateProvider
      .state('default', {
        url:'/default',
        templateUrl: 'default/default.html',
        controller: 'defaultController',
        controllerAs: 'default',
        resolve: {
          'categories': ['defaultService', function (defaultService) {
            return defaultService.getDefaultCategories();
          }],
          'grades': ['defaultService', function (defaultService) {
            return defaultService.getDefaultGrades();
          }],
          'formShown': function() {
            return true;
          }
        }
      })
      .state('custom', {
        url:'/custom',
        templateUrl: 'custom/custom.html',
        controller: 'customCtrl',
        controllerAs: 'custom',
        resolve: {
          'grades': ['defaultService', function (defaultService) {
            return defaultService.getDefaultGrades();
          }],
          'formShown': function() {
            return false;
          }
        }
      });
  });

