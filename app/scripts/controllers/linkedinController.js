'use strict';


var LinkedInControllers = angular.module('LinkedInControllers',[]);

LinkedInControllers.controller('LiCtrl', function LiCtrl($scope, $location, $rootScope, $http) {
    $rootScope.loggedUser = false;
    $rootScope.positions = [];
    $rootScope.skills = [];
    $rootScope.educations = [];
    $rootScope.publications = [];
    $rootScope.patents = [];
    $rootScope.languages = [];
    $rootScope.courses = [];
    $rootScope.volunteers = [];

    $scope.getLinkedInData = function() {
        if(!$scope.hasOwnProperty("userprofile")){
            IN.API.Profile("me").fields(
                [ "id", "firstName", "lastName", "maidenName", "pictureUrl","emailAddress","mainAddress","location",
                "numConnections","numConnectionsCapped", "lastModifiedTimestamp", "dateOfBirth","phoneNumbers",
                "headline", "industry","positions", "interests","associations","publications","patents","languages","skills", 
                "certifications", "educations", "courses", "volunteer", "siteStandardProfileRequest", "publicProfileUrl" ]).result(function(result) {
                // set the model
                $rootScope.$apply(function() {
                    var userprofile =result.values[0]
                    $rootScope.userprofile = userprofile;
                    $rootScope.loggedUser = true;
                    $rootScope.positions = userprofile.positions.values;
                    $rootScope.skills = userprofile.skills.values;
                    $rootScope.educations = userprofile.educations.values;
                    $rootScope.publications = userprofile.publications;//.values;
                    $rootScope.patents = userprofile.patents;//.values;
                    $rootScope.languages = userprofile.languages;//.values;
                    $rootScope.courses = userprofile.courses;//.values;
                    $rootScope.volunteers = userprofile.volunteer;//.values;
                });

            }).error(function(err) {
                $scope.error = err;
            });
        }
    };
      //logout and delete userprofile
    $scope.logoutLinkedIn = function() {
        IN.User.logout();
        delete $rootScope.userprofile;
        $rootScope.loggedUser = false;
    };
});