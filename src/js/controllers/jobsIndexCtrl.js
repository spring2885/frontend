(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('jobsIndexCtrl', ['$scope', '$http', '$state', 'abuseService', 
        function($scope, $http, $state, abuseService) {
                 console.log("jobsIndexCtrl constructed.");
                 $scope.jobs = [];
                 $scope.flag = function(id) {
                    console.log("Flagging id: " + id);
                    abuseService.abuse(id, "JOB", "");
                 };

                 $http.get('/api/v1/jobs')
                     .success(
                      function(response){
                          $scope.jobs = response;
                          return $scope.jobs;
                      })
                    .error(
                     function(response){
                         $state.go('404');
                     });
    }]);
})();
