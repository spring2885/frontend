(function() {
    "use strict";
    angular.module('spring-2885') 
        .controller('jobsShowCtrl', ['$scope', '$stateParams', '$http', '$state', 'MessageService',
            function($scope, $stateParams, $http, $state, MessageService) {

                $scope.job = {};
                MessageService.configure({disabled:false, max:3, timeout:3500});

                $http.get('/api/v1/jobs/' + $stateParams.id)
                .success(function(response) {
                    $scope.job = response;
                    return $scope.job;
                })
                .error(function(response) {
                    $state.go('404');
                });

                $scope.deleteJob = function(id) {
                    var apiURL = '/api/v1/jobs/' + id;
                    $http.delete(apiURL, '')
                    .success(function(response) {
                        $state.go('job-index');
                        var msg =  $translate.instant('job.DELETED');
                        MessageService.broadcast(msg, {color: 'success'});
                    })
                    .error(function(response) {
                        console.log(response);
                    });
                };
        }]);
})();
