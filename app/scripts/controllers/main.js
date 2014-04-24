'use strict';

/* Controllers */

var searchGuardianControllers = angular.module('searchGuardianControllers', []);

searchGuardianControllers.controller('MainCtrl',
  function ($scope) {
    $scope.greetMe ='u';
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
/*
searchGuardianControllers.service('UserService', function(){
  var users = [{  }];

  this.list = function () {
    return users;
  };

});*/

searchGuardianControllers.controller('UserInfoCtrl',
  function($scope, $http) {
    $scope.user = {
      firstName:' ',
      lastName:' ',
      dateOfBirth:' '
    };

    var emptyForm = angular.copy($scope.user);
    
    $scope.setBirthDate = function ()
    {
      $scope.user.dateOfBirth = $scope.dayBirth + '/' + $scope.monthBirth + '/' + $scope.yearBirth;
    };

    $scope.resetForm = function ()
    {
      $scope.user = angular.copy(emptyForm);
      $scope.dayBirth =' ';
      $scope.monthBirth =' ';
      $scope.yearBirth =' ';
    };

    $scope.resetDay = function ()
    {
      $scope.dayBirth = '1';
    };

    $scope.isFilled = function ()
    {
      return !angular.equals($scope.user, emptyForm);
    };
 
    $scope.user.selectedTargets = [];

    $http.get('data/targets.json').success(function(data) {
      $scope.targets = data;
    });

    $scope.uncheckCheckboxes = function() {
      $scope.user.selectedTargets = [];
    };
  });