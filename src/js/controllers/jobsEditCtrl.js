(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('jobsEditCtrl', ['$scope', '$http', '$state', '$stateParams', 'MessageService', '$localStorage', '$translate', function($scope, $http, $state, $stateParams, MessageService, $localStorage, $translate){
                 $scope.job = {};
                 $scope.$storage = $localStorage;
                 MessageService.configure({disabled:false, max:3, timeout:3500});
            
                 $http.get('/api/v1/jobs/' + $stateParams.id)
                     .success(
                      function(response){
                          $scope.job = response;
                          console.log('JOB GET: ' + JSON.stringify($scope.job));
                          if ($scope.$storage.user.id !== $scope.job.posted_by.id) {
                              console.log('Illegal Action');
                              $state.go('job-show', { id: $scope.job.id }, { reload: true });
                          }
                          
                          return $scope.job;
                      })
                    .error(
                     function(response){
                         $state.go('404');
                     });
            
            
            
            $scope.submitClick = function() {
                var apiURL = '/api/v1/jobs/' + $scope.job.id;
                     $http.put(apiURL , $scope.job)
				        .success(
				            function(response) {
                                
                                $state.go('job-show', { id: $scope.job.id }, { reload: true });
                                var msg =  $translate.instant('job.UPDATED');
                                MessageService.broadcast(msg, {color: 'success'});
					           console.log("UPDATE succeeded");
				        });
            };
    }]);
})();
