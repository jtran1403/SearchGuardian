'use strict';

/**Source: http://plnkr.co/edit/HcYBFKbqFcgQGhyCGQMw?p=preview **/

var facebookControllers = angular.module('facebookControllers', ['ngFacebook'])

facebookControllers.config( function( $facebookProvider ) {
  $facebookProvider.setAppId('1493426897539324');
  $facebookProvider.setPermissions("email,user_likes");
});

facebookControllers.run( function( $rootScope ) {
  // Load the facebook SDK asynchronously
  (function(){
     // If we've already installed the SDK, we're done
     if (document.getElementById('facebook-jssdk')) {return;}

     // Get the first script element, which we'll use to find the parent node
     var firstScriptElement = document.getElementsByTagName('script')[0];

     // Create a new script element and set its id
     var facebookJS = document.createElement('script'); 
     facebookJS.id = 'facebook-jssdk';

     // Set the new script's source to the source of the Facebook JS SDK
     facebookJS.src = '//connect.facebook.net/en_US/all.js';

     // Insert the Facebook JS SDK into the DOM
     firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
   }());
});

facebookControllers.controller('FbCtrl', function ($scope, $facebook) {
  $scope.isLoggedIn = false;
  $scope.status = '';

  $scope.login = function() {
    $facebook.login().then(function() {
      refresh();
    });
  }

  $scope.logout = function() {
    $facebook.logout().then(function() {
      refresh();
    });
  }

  function refresh() {
    $facebook.api("/me").then( 
      function(response) {
        $scope.welcomeMsg = "Welcome " + response.name;
        $scope.isLoggedIn = true;
      },
      function(err) {
        $scope.welcomeMsg = "Please log in";
        $scope.isLoggedIn = false;
      });
  }
  
});