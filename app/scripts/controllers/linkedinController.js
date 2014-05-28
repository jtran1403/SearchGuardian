var LinkedInControllers = angular.module('LinkedInControllers',[]);

LinkedInControllers.controller('LiCtrl', function LiCtrl($scope, $location, $rootScope, $http) {
    $scope.getLinkedInData = function() {
        if(!$scope.hasOwnProperty("userprofile")){
            IN.API.Profile("me").fields(
                [ "id", "firstName", "lastName", "pictureUrl",
                "publicProfileUrl" ]).result(function(result) {
                // set the model
                $rootScope.$apply(function() {
                    var userprofile =result.values[0]
                    $rootScope.userprofile = userprofile;
                    $rootScope.loggedUser = true;
                    //go to main
                    $location.path("/targets/results_LinkedIn");
                });
            }).error(function(err) {
                $scope.error = err;
            });
        }
    };
      //logout and go to login screen
    $scope.logoutLinkedIn = function() {
        //retrieve values from LinkedIn
        IN.User.logout();
        delete $rootScope.userprofile;
        $rootScope.loggedUser = false;
        $location.path("/targets/login_LinkedIn");
    };
});