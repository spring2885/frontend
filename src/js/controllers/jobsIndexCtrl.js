(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('jobsIndexCtrl', ['$scope', '$http', function($scope, $http){
                 $scope.jobs = [];
                 $http.get('/backend/jobs.json').success(
                      function(response){
                          $scope.jobs = response;
                          return $scope.jobs;
                      });
    }]);
})();