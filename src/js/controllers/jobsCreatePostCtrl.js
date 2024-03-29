(function() {
    "use strict";
    angular.module('spring-2885')
        .controller('jobsCreatePostCtrl', ['$scope', '$http', '$state', '$localStorage', 'MessageService', '$translate',
        function($scope, $http, $state, $localStorage, MessageService, $translate) {

            $scope.job = {};
            $scope.job.job_type = 1;
            $scope.$storage = $localStorage;
            $scope.job.posted_by ={};
            $scope.job.posted_by.id = $scope.$storage.user.id;
            
            MessageService.configure({disabled:false, max:3, timeout:3500});

            $scope.submitClick = function() {
                $http.post('/api/v1/jobs', $scope.job)
                .success(function(response) {
                    var msg = $translate.instant('jobs.CREATE_SUCCESS');
                    MessageService.broadcast(msg, {color: 'success'});
                    $state.go('job-my-jobs');
                })
                .error(function(response) {
                    console.log(response);
                });
          };
    }]);
})();
