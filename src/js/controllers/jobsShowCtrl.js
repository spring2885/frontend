(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('jobsShowCtrl', ['$scope', '$stateParams', '$http', '$state', function($scope, $stateParams, $http, $state){
                 $scope.job = {};
                 $http.get('/api/v1/jobs/' + $stateParams.id)
                     .success(
                      function(response){
                          $scope.job = response;
                          return $scope.job;
                      })
                     .error(
                     function(response){
                         $state.go('404');
                     });
            
                $scope.deleteJob = function(id) {
                    var apiURL = '/api/v1/jobs/' + id;
                    //Delete the Post in the Backend
                    $http.delete(apiURL, '')
                        .success(
                            function(response) {
                                console.log('Job Deleted');
                                $state.go('job-index');
                            });
                };
    }]);
})();
