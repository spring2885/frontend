(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('profileIndexCtrl', ['$scope', '$http', '$state', 'abuseService', function($scope, $http, $state, abuseService){

            $scope.profiles = [];
            $http.get('/api/v1/profiles')
                .success(
                 function(response){
                     $scope.profiles = response;
                     return $scope.profiles;
                 })
                .error(
                 function(response){
                    $state.go('404');
                });

            $scope.flag = function(id) {
                abuseService.abuse(id, 'PROFILE', '');
            };

            $scope.noFilter = true;
            $scope.studentFilter = false;
            $scope.alumniFilter = false;
            $scope.facultyFilter = false;
            $scope.classOfFilter = false;
            $scope.majorFilter = false;
            $scope.departmentFilter = false;

            $scope.filterProfiles  = function(type){
                if (type === 'all'){
                    $scope.noFilter = true;
                    $scope.studentFilter = false;
                    $scope.alumniFilter = false;
                    $scope.facultyFilter = false;
                    $scope.classOfFilter = false;
                    $scope.majorFilter = false;
                    $scope.departmentFilter = false;
                }
                if (type === 'student'){
                    $scope.noFilter = false;
                    $scope.studentFilter = true;
                    $scope.alumniFilter = false;
                    $scope.facultyFilter = false;
                    $scope.classOfFilter = false;
                    $scope.majorFilter = false;
                    $scope.departmentFilter = false;
                }
                if (type === 'alumni'){
                    $scope.noFilter = false;
                    $scope.studentFilter = false;
                    $scope.alumniFilter = true;
                    $scope.facultyFilter = false;
                    $scope.classOfFilter = false;
                    $scope.majorFilter = false;
                    $scope.departmentFilter = false;
                }
                if (type === 'faculty'){
                    $scope.noFilter = false;
                    $scope.studentFilter = false;
                    $scope.alumniFilter = false;
                    $scope.facultyFilter = true;
                    $scope.classOfFilter = false;
                    $scope.majorFilter = false;
                    $scope.departmentFilter = false;
                }
                if (type === 'classOf'){
                    $scope.noFilter = false;
                    $scope.studentFilter = false;
                    $scope.alumniFilter = false;
                    $scope.facultyFilter = false;
                    $scope.classOfFilter = true;
                    $scope.majorFilter = false;
                    $scope.departmentFilter = false;
                }
                if (type === 'major'){
                    $scope.noFilter = false;
                    $scope.studentFilter = false;
                    $scope.alumniFilter = false;
                    $scope.facultyFilter = false;
                    $scope.classOfFilter = false;
                    $scope.majorFilter = true;
                    $scope.departmentFilter = false;
                }
                if (type === 'department'){
                    $scope.noFilter = false;
                    $scope.studentFilter = false;
                    $scope.alumniFilter = false;
                    $scope.facultyFilter = false;
                    $scope.classOfFilter = false;
                    $scope.majorFilter = false;
                    $scope.departmentFilter = true;
                }
            };
    }]);
})();

