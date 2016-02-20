(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('jobsShowCtrl', ['$scope', '$statePrams', '$http', function($scope, $state, $stateParams, $http){
                 $scope.job = {};
                 $http.get('/backend/job' + $stateParams + '.json').success(
                      function(response){
                          $scope.job = response;
                          return $scope.job;
                      });
            //};
    }]);
})();