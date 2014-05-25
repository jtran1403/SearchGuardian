'use strict';

var facebookControllers = angular.module('facebookControllers', []);

facebookControllers.constant('facebookConfigSettings', {
    'routingEnabled' : true,
    'channelFile'    : 'channel.html',
    'appID'          : '1461372730766438'
  });

facebookControllers.controller('FbCtrl', 
  function($rootScope, $scope, facebookUser) {
    $rootScope.loggedInUser = {};

    $rootScope.$on('fbLoginSuccess', function(name, response) {
      facebookUser.then(function(user) {
        user.api('/me').then(function(response) {
          $rootScope.loggedInUser = response;
        });
      });
    });

    $rootScope.$on('fbLogoutSuccess', function() {
      $scope.$apply(function() {
        $rootScope.loggedInUser = {};
      });
    });
  });
