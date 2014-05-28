'use strict';

var searchGuardianApp = angular.module('searchGuardianApp',[
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'searchGuardianControllers',
    'LinkedInControllers'/*,
    'facebookControllers',
    'facebookUtils'*/
  ]);

searchGuardianApp.config(['$routeProvider','$locationProvider','$httpProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html'
      })
      .when('/user-info', {
        templateUrl: 'views/user-info.html',
        controller: 'UserInfoCtrl'
      })
      .when('/targets/Facebook', {
        templateUrl: 'views/fb-results.html',
        controller: angular.noop
      })
      .when('/targets/login_LinkedIn', {
        templateUrl: 'views/login_LinkedIn.html',
        controller:'LiCtrl'
      })
      .when('/targets/results_LinkedIn', {
        templateUrl: 'views/results_LinkedIn.html',
        controller:'LiCtrl'
      })
      .when('/main', {
        templateUrl : 'views/main.html',
        controller  : angular.noop
      })
      .when('/private', {
        templateUrl : 'views/private.html',
        controller  : angular.noop
      })
      .otherwise({
        redirectTo:  '/'
      });
  }]);

