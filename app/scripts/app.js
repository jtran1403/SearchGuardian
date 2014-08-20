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
    'PictureController',
    'nsPopover'
  ]);

searchGuardianApp.config(['$routeProvider','$locationProvider','$httpProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/Facebook', {
        templateUrl: 'views/facebook.html',
        controller: 'FbCtrl'
      })
      .when('/LinkedIn', {
        templateUrl: 'views/linkedin.html',
        controller:'LiCtrl'
      })
      .when('/pictures', {
        templateUrl: 'views/pictures.html',
        controller: 'PicturesCtrl'
      })
      .when('/Google', {
        templateUrl: 'views/google.html',
        controller: 'GoogleCtrl'
      })
      .when('/documentation', {
        templateUrl: 'views/documentation.html',
        controller: 'MainCtrl'  //angular.noop
      })
      .when('/explanations', {
        templateUrl: 'views/explanations.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo:  '/'
      });
  }]);