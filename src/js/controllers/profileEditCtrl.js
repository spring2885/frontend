(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('profileEditCtrl', ['$scope', '$state', '$stateParams', '$http', '$localStorage', 'MessageService', '$translate', 
        function($scope, $state, $stateParams, $http, $localStorage, MessageService, $translate) {

            MessageService.configure({disabled:false, max:3, timeout:4500});

            $scope.profile = {};
            $scope.message = {};
            $scope.message.notes = '';
            $scope.$storage = $localStorage;
            $scope.graduationYears = [];
            $scope.degreeTypes = [];
            $scope.departments = [];
            $scope.majors = [];
            $scope.minors = [];
            $scope.socialNetworks = [];
            $scope.socilaSite = {};
            $scope.socialName = '';
            $scope.socialUrl = '';

            var current = new Date();
            $scope.thisYear = current.getFullYear();

            $scope.addToSocial = function() {
                var fullSiteURL = $scope.socialSite.url + $scope.socialName;
                $scope.profile.social_connections.push({
                    name: $scope.socialSite.id,
                    url: fullSiteURL
                });

                $scope.socialSite = {};
                $scope.socialName = '';
            };

            $scope.removeSocial = function(index) {
                $scope.profile.social_connections.splice(index,1);
            };

            $scope.requstFaculty =  function() {
                $http.post('/api/v1/approvals/request/faculty', $scope.message)
                .success(function(response) {
                    var msg =  $translate.instant('profile.AWAITING_APPROVAL');
                    MessageService.broadcast(msg, {color: 'default'});
                })
                .error(function(response) {
                    var msg =  $translate.instant('profile.APPROVAL_REQUEST_FAILED');
                    MessageService.broadcast(msg, {color: 'danger'});
                    console.log(response);
                });
            };

            $scope.updateProfile = function() {
                var apiURL = '/api/v1/profiles/' + $scope.profile.id;
                $http.put(apiURL , $scope.profile)
                .success(function(response) {
                    $state.go('profile-view', { id: $scope.profile.id }, { reload: true });
                    var msg =  $translate.instant('profile.UPDATED');
                    MessageService.broadcast(msg, {color: 'success'});
                })
                .error(function(response) {
                    console.log(response);
                });
            };

            $http.get('/api/v1/profiles/' + $scope.$storage.user.id)
            .success(function(response){
                $scope.profile = response;
                return $scope.profile;
            })
            .error(function(response) {
                $state.go('404');
            });

            $http.get('/api/v1/socialservice')
            .success(function(response) {
                $scope.socialNetworks = response;
            })
            .error(function(response) {
                console.log(response);
            });

            $http.get('src/assets/core/graduationYears.json')
            .success(function(response) {
                $scope.graduationYears = response;
                return $scope.graduationYears;
            })
            .error(function(response) {
                console.log(response);
            });

            $http.get('src/assets/core/ndnuDegreeTypes.json')
            .success(function(response) {
                $scope.degreeTypes = response;
                return $scope.degreeTypes;
            })
            .error(function(response) {
                console.log(response);
            });

            $http.get('src/assets/core/ndnuMajors.json')
            .success(function(response) {
                $scope.majors = response;
                return $scope.majors;
            })
            .error(function(response) {
                console.log(response);
            });

            $http.get('src/assets/core/ndnuMinors.json')
            .success(function(response) {
                $scope.minors = response;
                return $scope.minors;
            })
            .error(function(response) {
                console.log(response);
            });

            $http.get('src/assets/core/ndnuDepartments.json')
            .success(function(response) {
                $scope.departments = response;
                return $scope.departments;
            })
            .error(function(response) {
                console.log(response);
            });
    }]);
})();