'use strict';

angular.module('mean.kopispace').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('kopispace example page', {
      url: '/kopispace/example',
      templateUrl: 'kopispace/views/index.html'
    });
  }
]);
