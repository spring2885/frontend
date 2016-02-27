(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('profileShowCtrl', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http){
                 $scope.profile = {};
                 $http.get('/backend/profile' + $stateParams.id + '.json').success(
                      function(response){
                          $scope.profile = response;
                          return $scope.profile;
                      });
    }]);
})();