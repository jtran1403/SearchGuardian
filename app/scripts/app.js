'use strict';

var searchGuardianApp = angular.module('searchGuardianApp',[
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'searchGuardianControllers',
    'facebookControllers',
    'facebookUtils'
  ]);

searchGuardianApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/user-info', {
        templateUrl: 'views/user-info.html',
        controller: 'UserInfoCtrl'
      })
      .when('/targets/Facebook', {
        templateUrl: 'views/fb-results.html',
        controller: 'FbCtrl'
      })      
      .when('/targets/LinkedIn', {
        templateUrl: 'views/li-results.html',
        controller: 'LiCtrl'
      })
      .when('/targets/Google', {
        templateUrl: 'views/li-results.html',
        controller: 'LiCtrl'
      })
      .when('/main', {
        templateUrl : 'views/main.html',
        controller  : angular.noop
      })
      .when('/private', {
        templateUrl : 'views/private.html',
        controller  : 'FbCtrl'
      })
      .otherwise({
        redirectTo:  '/'
      });
  }]);

