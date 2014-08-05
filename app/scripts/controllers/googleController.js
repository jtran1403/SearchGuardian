'use strict';

var googleControllers = angular.module('googleControllers', ['googleplus']);
/*
googleControllers.config(['GooglePlusProvider', function(GooglePlusProvider) {
     GooglePlusProvider.init({
        clientId: '1013860809668-jkso8eqkoik68cu0k7vfkl7gjh3tj47i.apps.googleusercontent.com',
        apiKey: 'sQ-mIpIxbYvKTWBLCfmZfwCn'
     });
}]);*/

googleControllers.run( function() {
  // Load the facebook SDK asynchronously
  (function(){
   var po = document.createElement('script'); 
   po.type = 'text/javascript'; po.async = true;
   po.src = 'https://apis.google.com/js/client:plusone.js';
   var s = document.getElementsByTagName('script')[0]; 
   s.parentNode.insertBefore(po, s);

   var cx = '004039856569851461121:aflilnhyumc';
   var gcse = document.createElement('script');
   gcse.type = 'text/javascript';  gcse.async = true;
   gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//www.google.com/cse/cse.js?cx=' + cx;
    var t = document.getElementsByTagName('script')[0];
    t.parentNode.insertBefore(gcse, t);
  }());

});

googleControllers.controller('GoogleCtrl', function ($scope, $http, $filter) {
//['$scope', 'GooglePlus', function ($scope, $http, $filter, GooglePlus) {

  $scope.user = {
    firstName:'',
    lastName:'',
    dateOfBirth:''
  };
  $scope.dayBirth ='';
  $scope.monthBirth ='';
  $scope.yearBirth ='';
  $scope.profileSet = false;

  var emptyForm = angular.copy($scope.user);
  
  $scope.setBirthDate = function ()
  {
    $scope.user.dateOfBirth = $scope.dayBirth + '/' + $scope.monthBirth + '/' + $scope.yearBirth;
    if($scope.user.firstName != '' && $scope.user.lastName != '' && $scope.yearBirth != '' && $scope.monthBirth != '' && $scope.dayBirth != '')
      $scope.profileSet = true;
  };

  $scope.resetForm = function ()
  {
    $scope.user = angular.copy(emptyForm);  
    $scope.dayBirth ='';
    $scope.monthBirth ='';
    $scope.yearBirth ='';
    $scope.profileSet = false;
  };

  $scope.resetDay = function () //because of february
  {
    $scope.dayBirth = '1';
  };

  $scope.isFilled = function ()
  {
    return !angular.equals($scope.user, emptyForm);
  };
  
  $scope.close = false;
  $scope.closeTip = function(){
    $scope.close = true;
  }
/*  $scope.user.selectedTargets = [];

  $http.get('data/targets.json').success(function(data) {
    $scope.targets = data;
  });

  $scope.selection = [];

  $scope.updateSelection = function(id){
    if($scope.targets[id].selected){
      $scope.selection.splice($scope.selection.indexOf($scope.targets[id]),1);
    }
    else
    {
      $scope.selection.push($scope.targets[id]);
    }
    $scope.targets[id].selected = !$scope.targets[id].selected;
    $scope.selection = $filter('orderBy')($scope.selection, 'id');
  };

  $scope.uncheckCheckboxes = function() {
    $scope.selection = [];
  };
*/
  });