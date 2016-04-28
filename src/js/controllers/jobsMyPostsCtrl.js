(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('jobsMyPostsCtrl', ['$scope', '$stateParams', '$http', '$state', '$localStorage', function($scope, $stateParams, $http, $state, $localStorage){
            
                 $scope.jobs = [];
                 $scope.$storage = $localStorage;
                 $scope.flag = function(id) {
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
