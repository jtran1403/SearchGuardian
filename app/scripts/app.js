'use strict';

var searchGuardianApp = angular.module('searchGuardianApp',[
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'searchGuardianControllers',
    'facebookUtils'
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
      .when('/targets/Facebook', {
        templateUrl: 'views/fb-results.html',
      })
      .otherwise({
        redirectTo:  '/'
      });
  }]);
