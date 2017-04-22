(function() {
    "use strict";
    angular.module('spring-2885')
        .controller('mainCtrl', ['$scope', '$state', 'authService', '$rootScope', '$stateParams', '$localStorage', '$http', 'MessageService', '$translate', 'authDefaults',
            function($scope, $state, authService, $rootScope, $stateParams, $localStorage, $http, MessageService, $translate, authDefaults) {

                $scope.$storage = $localStorage;
                if (!$scope.$storage.isLoggedIn) {
                    $scope.$storage.isLoggedIn = false;
                }

                MessageService.configure({disabled:false, max:3, timeout:3500});
                authDefaults.authenticateUrl = '/user';

                $rootScope.$on('login', function() {
                    $scope.loggedInUsername = authService.username();
                    $http.get('user').success(function(data) {
                        $scope.$storage.user = data.person;
                        if (!data.person.name){
                            $scope.$storage.user.name = data.principal.name;
                        } else {
                            $scope.$storage.user.name = data.person.name;
                        }
                        $scope.$storage.isLoggedIn = true;
                        $scope.isLoggedIn = true;
                        if($scope.$storage.user.name === $scope.$storage.user.email) {
                            $state.go('profile-edit');
                        } else {
                            $state.go('newsfeed-index');
                        }
                    });
                });

            $rootScope.$on('logout', function() {
                delete $scope.$storage.user;
                $scope.$storage.isLoggedIn = false;
                $scope.isLoggedIn = false;
                $state.go('login');
            });

            var checkLoggedIn = function() {
                if (!$scope.$storage.user) {
                    return false;
                }
                return true;
            };

            $scope.$storage.isLoggedIn = checkLoggedIn();
            $scope.isLoggedIn = $scope.$storage.isLoggedIn;
            $scope.credentials = {
                username: "",
                password: ""
            };

            $scope.login = function() {
                authService
                    .login($scope.credentials.username, $scope.credentials.password)
                    .error(function() {
                        var msg = $translate.instant('login.FAILED');
                        MessageService.broadcast(msg, {color: 'danger'});
                    });
            };

            $scope.logout = function() {
                authService.logout();
            };
    }]);
})();

