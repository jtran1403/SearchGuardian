'use strict';

var searchGuardianApp = angular.module('searchGuardianApp',[
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'mainController',
    'googleControllers',
    'LinkedInControllers',
    'FacebookControllers',
    'PictureController'
  ]);

searchGuardianApp.config(['$routeProvider','$locationProvider','$httpProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/aboutme', {
        templateUrl: 'views/aboutme.html',
        controller: 'MainCtrl'
      })
      .when('/documentation', {
        templateUrl: 'views/documentation.html',
        controller: 'MainCtrl'  //angular.noop
      })
      .when('/pictures', {
        templateUrl: 'views/pictures.html',
        controller: 'PicturesCtrl'
      })
      .when('/Facebook', {
        templateUrl: 'views/facebook.html',
        controller: 'FbCtrl'
      })
      .when('/Google', {
        templateUrl: 'views/google.html',
        controller: 'GoogleCtrl'
      })
      .when('/LinkedIn', {
        templateUrl: 'views/linkedin.html',
        controller:'LiCtrl'
      })
      .otherwise({
        redirectTo:  '/'
      });
  }]);

