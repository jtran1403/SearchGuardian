var LinkedInControllers = angular.module('LinkedInControllers',[]);

LinkedInControllers.controller('LiCtrl', function LiCtrl($scope, $location, $rootScope, $http) {
    $rootScope.loggedUser = false;
    $rootScope.positions = [];

    $scope.getLinkedInData = function() {
        if(!$scope.hasOwnProperty("userprofile")){
            IN.API.Profile("me").fields(
                [ "id", "firstName", "lastName", "maidenName", "pictureUrl","emailAddress","location","numConnections","numConnectionsCapped", 
                "headline", "industry","positions",
                "siteStandardProfileRequest", "publicProfileUrl" ]).result(function(result) {
                // set the model
                $rootScope.$apply(function() {
                    var userprofile =result.values[0]
                    $rootScope.userprofile = userprofile;
                    $rootScope.loggedUser = true;
                    $rootScope.positions = userprofile.positions.values;
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