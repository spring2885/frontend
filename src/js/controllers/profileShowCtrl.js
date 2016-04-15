(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('profileShowCtrl', ['$scope', '$stateParams', '$http', '$state', function($scope, $stateParams, $http, $state){
                 $scope.profile = {};
                 $http.get('/api/v1/profiles/' + $stateParams.id)
                     .success(
                      function(response){
                          $scope.profile = response;
                          return $scope.profile;
                      })
                    .error(
                     function(response){
                         $state.go('404');
                     });
    }]);
})();

/*

var app = angular.module("App", []);
var secondsToWaitBeforeSave = 2;
app.controller('contentController', ['$scope', function($scope) {
  $scope.text01 = 'Click here to edit the text.';
  $scope.text02 = 'You will need to click the button to enable content editing before you can change this text.';
  $scope.editmode = false;
  $scope.toggleEditMode = function(){
    $scope.editmode = $scope.editmode === false ? true: false;
  };
}]);

app.directive("contenteditable", function() {
  return {
    require: "ngModel",
    link: function(scope, element, attrs, ngModel) {

      function read() {
        ngModel.$setViewValue(element.html());
      }

      ngModel.$render = function() {
        element.html(ngModel.$viewValue || "");
      };

      element.bind("blur keyup change", function() {
        scope.$apply(read);
      });
    }
  };
});



app.controller('ParentController', function($scope) {
  $scope.items = [{description: {{profile.about_me}}];
});

app.controller('ChildController', function($scope, $timeout) {
  var timeout = null;
  var saveUpdates = function() {
    if ($scope['item_' + $scope.$index + '_form'].$valid) {
      console.log("Saving updates to item #" + ($scope.$index + 1) + "...", $scope.item);
    } else {
      console.log("Tried to save updates to item #" + ($scope.$index + 1) + " but the form is invalid.");
    }
  };
  var debounceUpdate = function(newVal, oldVal) {
    if (newVal != oldVal) {
      if (timeout) {
        $timeout.cancel(timeout);
      }
      timeout = $timeout(saveUpdates, secondsToWaitBeforeSave * 1000);
    }
  };
  $scope.$watch('item.aboutMe', debounceUpdate);
});
*/