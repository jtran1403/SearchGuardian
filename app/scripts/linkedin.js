'use strict';

//LinkedIn functions
//Execute on load profile
function onLinkedInLoad() {    
  //location.reload(true);
  //reloadPage();

  IN.Event.on(IN, 'auth', function() {
    onLinkedInLogin();
  });
    IN.Event.on(IN, 'logout', function() {
    onLinkedInLogout();
  });
}

//execute on logout event
function onLinkedInLogout() {
  location.reload(true);
}

//execute on login event
function onLinkedInLogin() {
// pass user info to angular
  if (angular.element(document.getElementById('appBody')).scope()) {
    angular.element(document.getElementById('appBody')).scope().$apply(
      function($scope) {
        $scope.getLinkedInData();
      }
    );
  }
}
/*
function reloadPage(){
  var type = window.location.hash.substr(1);
  alert(type.indexOf("/LinkedIn#reload"));
  if(type.indexOf("/LinkedIn#reload") != -1){
    alert(type);
    type = '';
    window.location.replace('#/LinkedIn/');
    location.reload(true);
  }
}*/