'use strict';

var mainController = angular.module('mainController',[]).controller('MainCtrl', function ($scope, $location) {

    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

    $scope.close = false;
    $scope.closeTip = function(){
      $scope.close = true;
    }
    
});
