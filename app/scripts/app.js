'use strict';

var searchGuardianApp = angular.module('searchGuardianApp',[
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'searchGuardianControllers',
  ]);

searchGuardianApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/user-info', {
        templateUrl: 'views/user-info.html',
        controller: 'UserInfoCtrl'
      })
      .otherwise({
        redirectTo:  '/'
      });
  }]);
