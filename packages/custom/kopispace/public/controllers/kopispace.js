'use strict';

angular.module('mean.kopispace').controller('KopispaceController', ['$scope', 'Global', 'Kopispace',
  function($scope, Global, Kopispace) {
    $scope.global = Global;
    $scope.package = {
      name: 'kopispace'
    };
  }
]);
