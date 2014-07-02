var mainController = angular.module('mainController',[]).controller('MainCtrl', function ($scope, $location) {

    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
});