(function() {
    "use strict";
    angular.module('spring-2885')
        .controller('adminCtrl', ['$scope', '$stateParams', '$http', '$state', 
        function($scope, $stateParams, $http, $state) {

            var getApprovals = function(type, callback) {
                $http.get('/api/v1/approvals/list?state=open&type=' + type)
                .success(function(response) {
                    if (callback) callback(response);
                })
                .error(function(response) {
                    console.log(response);
                });
            };

            var verdict = function(id, approved, notes) {
                var data = {
                    id: id,
                    approved: approved ? "true" : "false",
                    notes: notes
                };
                $http.post('/api/v1/approvals/verdict', data)
                .success(function(response) {
                    $state.reload();
                })
                .error(function(response) {
                    console.log(response);
                });
            };

            $scope.approveFacultyItem = function(index) {
                var id = $scope.faculty_requests[index].id;
                verdict(id, true, "");
            };

            $scope.rejectFacultyItem = function(index) {
                var id = $scope.faculty_requests[index].id;
                verdict(id, false, "");
            };

            $scope.approveAbuseItem = function(index) {
                var id = $scope.abuse_requests[index].id;
                verdict(id, true, "");
            };

            $scope.rejectAbuseItem = function(index) {
                var id = $scope.abuse_requests[index].id;
                verdict(id, false, "");
            };

            getApprovals('FACULTY', function(response) {
                $scope.faculty_requests = response;
            });

            getApprovals('ABUSE', function(response) {
                $scope.abuse_requests = response;
            });
        }]);
})();
