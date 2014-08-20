'use strict';

var mainController = angular.module('mainController',[]).controller('MainCtrl', function ($scope, $location) {

    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

    $scope.close = false;
    $scope.closeTip = function(){
      $scope.close = true;
    };
    $scope.selectedIndex = 0;
    $scope.explanations= ["Disclosure of information", "Profiling", "Government Surveillance", "References"];
    $scope.documentation= ["Search Guardian", "Acknowledgements", "Ethical considerations", "Features","Comments"];
    
    $scope.selectTab = function(index){
    	$scope.selectedIndex = index;
    };
});
