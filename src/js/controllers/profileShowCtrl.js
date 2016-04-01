(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('profileShowCtrl', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http){
                 $scope.profile = {};
                 $http.get('/api/v1/profiles/' + $stateParams.id).success(
                      function(response){
                          $scope.profile = response;
                          return $scope.profile;
                      });
    }]);
})();