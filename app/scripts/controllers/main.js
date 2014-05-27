'use strict';

/* Controllers */

var searchGuardianControllers = angular.module('searchGuardianControllers', []);

searchGuardianControllers.controller('UserInfoCtrl',
  function($scope, $http, $filter) {
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
 
  //  $scope.user.selectedTargets = [];

    $http.get('data/targets.json').success(function(data) {
      $scope.targets = data;
    });

    $scope.selection = [];

    $scope.updateSelection = function(id){
      if($scope.targets[id].selected){
        $scope.selection.splice($scope.selection.indexOf($scope.targets[id]),1);
      }
      else
      {
        $scope.selection.push($scope.targets[id]);
      }
      $scope.targets[id].selected = !$scope.targets[id].selected;
      $scope.selection = $filter('orderBy')($scope.selection, 'id');
    };

    $scope.uncheckCheckboxes = function() {
      $scope.selection = [];
    };

  });