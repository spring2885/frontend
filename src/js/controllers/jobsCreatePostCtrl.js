(function() {
    "use strict";
    angular.module('spring-2885')
        .controller('jobsCreatePostCtrl', ['$scope', '$http', '$state', '$localStorage', function($scope, $http, $state, $localStorage
          ){

         $scope.job = {};
         $scope.job.job_type = '1';
         $scope.$storage = $localStorage;
         $scope.job.posted_by ={};
         $scope.job.posted_by.id = $scope.$storage.user.id;
         //console.log('USER: ' + JSON.stringify($scope.$storage.user));
            console.log('In Create Ctrl');

          $scope.submitClick = function(){

            console.log('Job JSON to Post to Backend: ' + JSON.stringify($scope.job));

            $http.post('/api/v1/jobs' , $scope.job)
                        .success(
                            function(response) {
                               console.log("UPDATE succeeded " + JSON.stringify(response));
                        })
                        .error(
                          function(response) {
                            console.log("Failed to post job " + JSON.stringify(response));
                          });
          };

    }]);

})();
