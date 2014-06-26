'use strict';

var searchGuardianApp = angular.module('searchGuardianApp',[
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'googleControllers',
    'LinkedInControllers',
    'FacebookControllers'
  ]);

searchGuardianApp.config(['$routeProvider','$locationProvider','$httpProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: angular.noop
      })
      .when('/aboutme', {
        templateUrl: 'views/aboutme.html',
        controller: angular.noop
      })
      .when('/documentation', {
        templateUrl: 'views/documentation.html',
        controller: angular.noop
      })
      .when('/user-info', {
        templateUrl: 'views/user-info.html',
        controller: 'GoogleCtrl'
      })
      .when('/targets/Facebook', {
        templateUrl: 'views/facebook.html',
        controller: 'FbCtrl'
      })
      .when('/targets/LinkedIn', {
        templateUrl: 'views/linkedin.html',
        controller:'LiCtrl'
      })
      .otherwise({
        redirectTo:  '/'
      });
  }]);

