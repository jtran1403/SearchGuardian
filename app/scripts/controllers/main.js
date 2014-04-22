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

searchGuardianControllers.service('UserService', function(){
  var users = [{  }];

  this.list = function () {
    return users;
  };

});

searchGuardianControllers.controller('UserInfoCtrl',
  function($scope, UserService) {

    $scope.user = {
      firstName:' ',
      lastName:' ',
      dateOfBirth:' '
    };

    var emptyForm = angular.copy($scope.user);

    $scope.setBirthDate = function ()
    {
      $scope.user.dateOfBirth = $scope.dayBirth + '/' + $scope.monthBirth + '/' + $scope.yearBirth;
    }

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
      setBirthDate();
    }

    $scope.isFilled = function ()
    {
      return !angular.equals($scope.user, emptyForm);
    };
 
    $scope.users = UserService.list();
  });

