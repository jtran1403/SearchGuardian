'use strict';

/* Controllers */

var controllers = angular.module('searchGuardianControllers', []);

controllers.controller('MainCtrl', function ($scope) {
    $scope.greetMe = "u"; 
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
/*
controllers.service('User', function(){
	var uid = 0;
	var.infos = [];

	this.confirm = function(user){
		if(contact.id == null){
			contact.id = uid++;
		}
	}

});*/

controllers.controller('UserInfoCtrl', ['$scope', 
  function($scope) {
    $scope.firstName = "hz";
    $scope.lastName = "";
    $scope.greetMe = "u"; 
  }]);


