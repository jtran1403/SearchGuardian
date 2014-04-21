'use strict';

angular
  .module('searchGuardianApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
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
  });