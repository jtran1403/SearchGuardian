'use strict';

var FacebookControllers = angular.module('FacebookControllers', ['ngFacebook'])

FacebookControllers.config( function( $facebookProvider ) {
  $facebookProvider.setAppId('1493426897539324');
  $facebookProvider.setPermissions("public_profile, email,  user_friends, user_birthday, user_about_me, user_hometown, user_activities, user_actions.news, user_education_history, user_events, user_groups, user_interests, user_likes, user_location, user_photos, user_relationships, user_relationship_details, user_religion_politics, user_status, user_tagged_places, user_videos, user_website, user_work_history, read_friendlists, read_stream, read_insights");
});

FacebookControllers.run( function( $rootScope ) {
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

FacebookControllers.filter('splitID', function(){
  return function(input, splitChar, splitIndex) {
      //take the second part of the ID 
      return input.split(splitChar)[splitIndex];
  }
});

FacebookControllers.controller('FbCtrl', function ($q, $scope, $facebook) {
  cleanInfo();
  
  $scope.login = function() {
    $facebook.login().then(function() {
      $scope.auth = $facebook.getAuthResponse();
      refresh();
      checkPermissions();
      loadPicture();
      loadAlbums();
      loadFeed();
      loadFriends();
    });
  }

  function checkPermissions(){
      FB.api("/me/permissions", function(response) {
      $scope.permissions = response;
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
      if (response && !response.error) 
      {
        $scope.picture = response.data.url;
      }
      else
      {
        $scope.picture = "Profile picture error: " + response;
      }
    });
  }

  function loadAlbums()
  {
    FB.api("/me/albums", function (response) 
    {
      if (response && !response.error) 
      {
        $scope.albums = response.data;
        $scope.originalAlbums = $scope.albums;    //to apply filter on the albums => albumFilterChanged():
      }
      else
      {
        $scope.albums = "Albums error: " + response;
      }
    });
  }

  $scope.albumFilterChanged = function()
  {
    if($scope.privacyFilterSet == 3)
      $scope.albums = $scope.originalAlbums;
    else if($scope.privacyFilterSet == 2)
      {
        $scope.privacyCustom = true;
        $scope.privacyFriends = false;
        $scope.privacyEveryone = false;
      }
    else if($scope.privacyFilterSet == 1)
      {
        $scope.privacyCustom = false; 
        $scope.privacyFriends = true;
        $scope.privacyEveryone = false;
      }
    else if($scope.privacyFilterSet == 0)
      {
        $scope.privacyCustom = false;
        $scope.privacyFriends = false;
        $scope.privacyEveryone = true;
      }
    else
      $scope.albums = 'Filter error';
  }



  $scope.loadAlbum = function(index)
  {
    if($scope.albumSelected == index.id)
    {
      $scope.albumSelected = false;
      $scope.photos = null;
    }
    else
    {
      $scope.albumSelected = $scope.albums[index].id;
      $scope.photos = null;
      FB.api("/"+$scope.albumSelected+"/photos", function (response)
      {
        if (response && !response.error) 
        {
          $scope.photos = response.data;
          $scope.showAlbum();
        }
        else
        {
          $scope.photos = "Photos error: " + response;
        }
      });
    }
  }

  $scope.showAlbum = function()
  {
    $scope.isAlbum = true;
  }

  $scope.closeAlbum = function()
  {
    $scope.albumSelected = false;
    $scope.isAlbum = false;
  }

  function loadFeed()  //only friends using the same application (see Facebook documentation)
  {
    //FB.api("/me/friends?fields=name,picture.type(square)", function(response)
    FB.api("/me/feed", function(response)
    {
      if (response)
      {
        $scope.feed = response.data;
        if($scope.feed != "[  ]" && $scope.feed != null)
        {
          //try to retrieve URL of the activity logs

          //look for an action with a link through the 25 last activity logs
          for(var i=0;i<25;i++) {
            if($scope.postLink == null)
              searchLink(i);
            else
              break;
          }

          if($scope.postLink != null)
          {
            var tmp = $scope.postLink.split('/');
            for(var i=0; i < tmp.length - 1; i++)
              $scope.templateLink = $scope.templateLink + tmp[i]+'/';
          }

          $scope.originalFeed = $scope.feed; //saving feed to apply the filter => filterChanged2()
        }
      }
      else
      {
        $scope.feed = "Feed error: " + response;
      }
    });
  }

  $scope.feedFilterChanged = function()
  {
    if($scope.privacyFilterSet2 == 3)
      $scope.feed = $scope.originalFeed;
    else if($scope.privacyFilterSet2 == 2)
      {
        $scope.privacyCustom2 = true;
        $scope.privacyFriends2 = false;
        $scope.privacyEveryone2 = false;
      }
    else if($scope.privacyFilterSet2 == 1)
      {
        $scope.privacyCustom2 = false; 
        $scope.privacyFriends2 = true;
        $scope.privacyEveryone2 = false;
      }
    else if($scope.privacyFilterSet2 == 0)
      {
        $scope.privacyCustom2 = false;
        $scope.privacyFriends2 = false;
        $scope.privacyEveryone2 = true;
      }
    else
      $scope.albums = 'Filter error';
  }

  $scope.deleteFeed = function(postId)
  {

    FB.api('/'+ postId, 'DELETE', function (response) {
      if (response && !response.error) {
        updateBataranq();
      }
    }
);

  }

  $scope.showFeed = function()
  {
    $scope.isFeed = true;
  }

  $scope.hideFeed = function()
  {
    $scope.isFeed = false;
  }


  function searchLink(i)
  {
    if("actions" in $scope.feed[i])
      $scope.postLink = $scope.feed[i].actions[0].link;//every action refer to the same link
    else
      $scope.postLink = null;

  }

  function loadProfile(response)
  {
    $scope.user = response;
    $scope.sports = response.sports;
    $scope.education = response.education;
    $scope.works = response.work;
  }

  function loadFriends()
  {
    FB.api("/me/friends", function(response)
    {
      if (response)
      {
        $scope.friends = response.data;
      }
      else
      {
        $scope.friends = "Friends error: " + response;
      }
    });
  }

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
    $scope.album = null;
    $scope.albums = null;
    $scope.albumSelected = false;
    $scope.originalAlbums = null;
    $scope.privacyFilter = {value:['Everyone','Friends','Custom','No filter','Depends of the original post']};
    $scope.privacyFilterSet = 3;
    $scope.privacyEveryone = false;
    $scope.privacyFriends = false;
    $scope.privacyCustom = false; 
    $scope.isAlbum = false;

    $scope.postLink = null;
    $scope.templateLink = '';
    $scope.findpost = 0;  
    $scope.privacyFilter2 = "";
    $scope.isFeed = false;
    $scope.privacyFilterSet2 = 3;
    $scope.privacyEveryone2 = false;
    $scope.privacyFriends2 = false;
    $scope.privacyCustom2 = false;
  }

    $scope.templates =
      [ { name: 'Adjusting the privacy settings and updating the data of your profile', url: 'templates/facebook/setPrivacySettings.html'},
        { name: 'Modifying the visibility of your actions', url: 'templates/facebook/updatePost.html'},
        { name: 'Choosing the appropriate visibility', url: 'templates/facebook/setVisibility.html'}  ];

    $scope.template = $scope.templates[0];

    $scope.close = false;
    $scope.closeTip = function(){
      $scope.close = true;
    }
}); 