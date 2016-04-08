(function() {
    "use strict";
    angular.module('spring-2885')
        .controller('mainCtrl', ['$scope', '$state', 'authService', '$rootScope',
                                '$stateParams', '$localStorage', '$http', 'MessageService', '$translate', 'authDefaults', function($scope, $state, authService, $rootScope, $stateParams, $localStorage, $http, MessageService, $translate, authDefaults) {
            
                                    
            $scope.$storage = $localStorage;
            if (!$scope.$storage.isLoggedIn) {
                $scope.$storage.isLoggedIn = false;
            }
            MessageService.configure({disabled:false, max:3, timeout:3500});

            authDefaults.authenticateUrl = '/user';
            authService.addEndpoint();

            // listen for login events
            $rootScope.$on('login', function() {
                console.log("login event handler.");
                $scope.loggedInUsername = authService.username();
            });

            // listen for logout events
            $rootScope.$on('logout', function() {
                console.log("logout event handler.");
                delete $scope.$storage.user;
                $scope.$storage.isLoggedIn = false;
                $scope.isLoggedIn = false;
            });
                                    
            var setLoggedInUser = function() {
                $http.get('user').success(function(data) {
                    console.log("setLoggedInUser: [/user] person: " +
                        JSON.stringify(data.person));
                    $scope.$storage.user = data.person;
                });
            };

            var checkLoggedIn = function() {
                if (!$scope.$storage.user) {
                    return false;
                }
                return true;
            };
                                    
            $scope.$storage.isLoggedIn = checkLoggedIn();
            $scope.isLoggedIn = $scope.$storage.isLoggedIn;
            console.log("isLoggedIn = " + $scope.isLoggedIn);
            
            $scope.credentials = {
                username : "",
                password : ""
            };
            
            $scope.login = function() {
                authService
                    .login($scope.credentials.username, $scope.credentials.password)
                    .success(function() {
                        console.log("/user success: " + authService.username());

                        $scope.$storage.isLoggedIn = true;
                        $scope.isLoggedIn = true;

                        // Grab the current user profile.
                        setLoggedInUser();
                        //console.log("SUCCESS: user: " + $scope.$storage.user.email);
                    
                        $state.go('newsfeed-index');
                    })
                    .error(function() {
                        console.log("FAILURE: login failed: " + $scope.credentials.username);
                    
                        /*
                        for debugging:
                        console.log('SHIT!');
                        */
                    
                        var msg = $translate.instant('login.FAILED');
                        MessageService.broadcast(msg, {color: 'danger'});
                    });
            };
            
            $scope.logout = function() {
                authService.logout();
                $state.go('login');
            };
            
            
     }]);
})();

