'use strict';

/* Controllers */

var facebookControllers = angular.module('facebookControllers', []);

facebookControllers.controller('fbCtrl',
  function ($scope) {
    $scope.log='';
    $scope.password = '';
  }
);








