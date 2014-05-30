'use strict';

var facebookControllers = angular.module('facebookControllers', ['ngFacebook']);


facebookControllers.controller('FbCtrl', function($rootScope, $scope) {
  $scope.welcomeMsg = 'Login please';
  $scope.testAPI = function ($scope) {

        $scope.welcomeMsg = 'Thanks for logging in';//, ' + response.name + '!';


    };
  });

facebookControllers.run(function ($rootScope){
  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1493426897539324',
      xfbml      : true,
      status     : true,
      version    : 'v2.0'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
});

