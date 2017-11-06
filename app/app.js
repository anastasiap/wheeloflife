'use strict';

angular.module("wheeloflife", [
    'ui.router',
    'wheelCommon' // TODO rename
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
            return defaultService.getDefaultCategories().then(function(result){
              console.log('app result categories', result);
              return result.data;
            });
          }],
          'grades': ['defaultService', function (defaultService) {
            return defaultService.getDefaultGrades().then(function(result){
              console.log('app result grades', result);
              return result.data;
            });
          }]
        }
      })
      .state('custom', {
        url:'/custom',
        templateUrl: 'custom/custom.html',
        controller: 'customCtrl',
        controllerAs: 'custom',
        resolve: {
          'grades': ['defaultService', function (defaultService) {
            return defaultService.getDefaultGrades().then(function (result) {
              console.log('app custom grades', result);
              return result.data;
            });
          }]
        }
      });
  });

