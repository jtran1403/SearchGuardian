'use strict';

var PictureController = angular.module('PictureController', []);

PictureController.directive('fileDropzone', function() {
  return {
    restrict: 'A',
    scope: {
      file: '=',
      fileName: '='
    },
    link: function(scope, element, attrs) {
      var checkSize, isTypeValid, processDragOverOrEnter, validMimeTypes;
      processDragOverOrEnter = function(event) {
        if (event !== null) {
          event.preventDefault();
        }
        event.originalEvent.dataTransfer.effectAllowed = 'copy';
        event.originalEvent.dataTransfer.effectAllowed = 'copyMove';
        return false;
      };
      validMimeTypes = attrs.fileDropzone;

      checkSize = function(size) {
        var _ref;
        if (((_ref = attrs.maxFileSize) === (void 0) || _ref === '') || (size / 1024) / 1024 < attrs.maxFileSize) {
          return true;
        } else {
          alert('File must be smaller than ' + attrs.maxFileSize + ' MB');
          return false;
        }
      };

      isTypeValid = function(type) {
        if ((validMimeTypes === (void 0) || validMimeTypes === '') || validMimeTypes.indexOf(type) > -1) {
          return true;
        } else {
          alert('Invalid file type.  File must be one of following types ' + validMimeTypes);
          return false;
        }
      };
      
      element.bind('dragover', processDragOverOrEnter);
      element.bind('dragenter', processDragOverOrEnter);
      return element.bind('drop', function(event) {
        var file, name, reader, size, type;
        if (event !== null) {
          event.preventDefault();
        }
        reader = new FileReader();
        reader.onload = function(evt) {
          if (checkSize(size) && isTypeValid(type)) {
            return scope.$apply(function() {
              scope.file = evt.target.result;
              //console.log(size);
              if (angular.isString(scope.fileName)) {
                return scope.fileName = name;
              }
            });
          }
        };
        file = event.originalEvent.dataTransfer.files[0];
        name = file.name;
        type = file.type;
        size = file.size;
        reader.readAsDataURL(file);
        return false;
      });
    }
  };
});

PictureController.controller('PicturesCtrl', function ($scope) {
    $scope.image = null;
    $scope.imageFileName = '';

    /*$scope.file = {};
    $scope.exifData = '';

    $scope.emptyEXIF = function(){
      $scope.exifData = '';
      //alert('hi');
    };
    
    $scope.analyzeEXIF = function(){
        EXIF.getData(this, function() {
        alert(EXIF.pretty(this));
      });
    };*/
});

