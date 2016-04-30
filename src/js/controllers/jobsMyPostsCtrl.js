(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('jobsMyPostsCtrl', ['$scope', '$stateParams', '$http', '$state', '$window', '$localStorage', 'MessageService', function($scope, $stateParams, $http, $state, $window, $localStorage, MessageService){
            
                 $scope.jobs = [];
                 $scope.$storage = $localStorage;
                 MessageService.configure({disabled:false, max:3, timeout:3500});
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
            
                $scope.deleteJob = function(id) {
                    var apiURL = '/api/v1/jobs/' + id;
                    //Delete the Post in the Backend
                    $http.delete(apiURL, '')
                        .success(
                            function(response) {
                                $window.location.reload();
                                var msg =  $translate.instant('job.DELETED');
                                MessageService.broadcast(msg, {color: 'success'});
                            });
                };
    }]);
})();
