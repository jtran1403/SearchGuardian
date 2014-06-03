'use strict';

/**Source: http://plnkr.co/edit/HcYBFKbqFcgQGhyCGQMw?p=preview **/

var facebookControllers = angular.module('facebookControllers', ['ngFacebook'])

facebookControllers.config( function( $facebookProvider ) {
  $facebookProvider.setAppId('1493426897539324');
  $facebookProvider.setPermissions("public_profile, email, user_friends, user_birthday, user_about_me, user_activities, user_education_history, user_events, user_groups, user_interests, user_likes, user_location, user_photos, user_relationships, user_relationship_details, user_religion_politics, user_status, user_tagged_places, user_videos, user_website, user_work_history");
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

facebookControllers.controller('FbCtrl', function ($q, $scope, $facebook) {
  cleanInfo();
  
  $scope.login = function() {
    $facebook.login().then(function() {
      $scope.auth = $facebook.getAuthResponse();
      refresh();
      loadPicture();
      loadAlbums();
      loadFriends();
    });
  }

  $scope.logout = function() {
    $facebook.logout().then(function() {
      cleanInfo();
    });
  }

  function refresh() {
    $facebook.api("/me").then( 
      function(response) {
        loadProfile(response);
        $scope.status = "Welcome " + response.name;
        $scope.isLoggedIn = true;
      },
      function(error) {
        $scope.status = "Log in error";
        $scope.isLoggedIn = false;
      });
  }
  function loadPicture()
  {
    FB.api("/me/picture?type=large", function (response) 
    {
      if (response && !response.error) {
        $scope.picture = response.data.url;
      }
    });
  }

  function loadAlbums()
  {
    FB.api("/me/albums", function (response) 
    {
      if (response && !response.error) {
        $scope.albums = response.data;
      }
      else
        $scope.albums = "Error with albums";
    });
  }


  $scope.loadAlbum = function(index)
  {
    $scope.albumSelected = $scope.albums[index].id;
    $scope.photos = null;
    FB.api("/"+$scope.albumSelected+"/photos", function (response)
    {
      if (response && !response.error) 
      {
        $scope.photos = response.data;
      }
    });
  }

  function loadFriends()  //only friends using the same application (see Facebook documentation)
  {
    //FB.api("/me/friends?fields=name,picture.type(square)", function(response)
    FB.api("/me/friends", function(response)
    {
      if (response)
      {
        $scope.friends = response.data;
      }
      else
      {
        $scope.friends = {error: "FRIENDS_FAIL", message: "Facebook friends error: " + response};
      }
    });
  }

  function loadProfile(response)
  {
    $scope.user = response;
    $scope.sports = response.sports;
    $scope.education = response.education;
    $scope.works = response.work;
  }

  function updateBataranq(){}   //data not updating correctly on bataranq unless there is an action on the page

  function cleanInfo()
  {
    $scope.isLoggedIn = false;
    $scope.status = "Please log in";
    $scope.friends = [];
    $scope.user = [];
    $scope.auth = [];

    $scope.sports = null;
    $scope.education = null;
    $scope.works = null;

    $scope.picture = null;
    $scope.photos = null;
    $scope.albums = null;
    $scope.albumSelected = null;
  }
}); 