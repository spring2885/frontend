(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('profileShowCtrl', ['$scope', '$statePrams', '$http', function($scope, $state, $stateParams, $http){
                 $scope.profile = {};
                 $http.get('/backend/profile' + $stateParams + '.json').success(
                      function(response){
                          $scope.profile = response;
                          return $scope.profile;
                      });
           // };
    }]);
})();