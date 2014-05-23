'use strict';

angular.module('facebookUtils')
  .provider('facebookSDK', function() {

    // https://developers.facebook.com/docs/facebook-login/getting-started-web/

    var loadScript = function(d, cb) {
      var js = d.createElement('script');
      js.async = true;
      js.src = '//connect.facebook.net/en_US/all.js';
      js.onreadystatechange = function() {
        if (this.readyState == 'complete') {
          cb();
        }
      };
      js.onload = cb;
      d.getElementsByTagName('body')[0].appendChild(js);
    };

    this.$get = [
      '$q', 'facebookConfigDefaults', 'facebookConfigSettings', '$timeout',
      function($q, facebookConfigDefaults, facebookConfigSettings, $timeout) {
        var deferred = $q.defer();

        if (!facebookConfigSettings.appID) {
          deferred.reject('You must provide an app-id for the facebook-login directive to work!');
        } else {
          loadScript(document, function(callback) {
            FB.init({
              appId      : '1461372730766438',
              cookie     : true,  // enable cookies to allow the server to access the session
              //status     : true,
              xfbml      : true,  // parse social plugins on this page
              version    : 'v2.0' // use version 2.0
            });
            $timeout(function() {
              deferred.resolve(FB);
            });
          });
        }

        return deferred.promise;
      }
    ];

  });