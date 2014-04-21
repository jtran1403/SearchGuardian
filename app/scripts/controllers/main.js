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
searchGuardianControllers.service('User', function(){
	var uid = 0;
	var.infos = [];

	this.confirm = function(user){
		if(contact.id == null){
			contact.id = uid++;
		}
	}

});*/

searchGuardianControllers.controller('UserInfoCtrl',['$scope',
  function($scope) {
    $scope.firstName = '';
    $scope.lastName = '';
    $scope.greetMe = '';
  }]);

