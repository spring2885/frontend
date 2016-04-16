(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('jobsIndexCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
                 console.log("jobsIndexCtrl constructed.");
                 $scope.jobs = [];
                 $scope.flag = function(id) {
                    console.log("Flagging id: " + id);
                    var data = {
                      item_type : "JOB",
                      item_id : id,
                      item_url : "http://localhost:8001/jobs/ " + id,
                      notes : ""
                    };
                    $http.post('/api/v1/approvals/request/abuse', data)
                    .success(
                      function(response) {
                        console.log("success on id: " + id);
                      });
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
