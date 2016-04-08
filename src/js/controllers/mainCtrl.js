(function() {
    "use strict";
    angular.module('spring-2885')
        .controller('mainCtrl', ['$scope', '$state', 'authService', '$rootScope',
                                '$stateParams', '$localStorage', '$http', 'MessageService', '$translate', 'authDefaults', function($scope, $state, authService, $rootScope, $stateParams, $localStorage, $http, MessageService, $translate, authDefaults) {
            
                                    
            authDefaults.authenticateUrl = '/user';
                                    
            $scope.$storage = $localStorage;
            MessageService.configure({disabled:false, max:3, timeout:3500});
                                    
            var isLoggedIn = function() {
                
                var user = $localStorage.user;
                if (!user) {
                    
                    /* for debugging:
                    console.log("isLoggedIn: false");
                    */
                    
                    return false;
                }
            };
                                    
            $scope.$storage.isLoggedIn = isLoggedIn();
            $scope.isLoggedIn = $scope.$storage.isLoggedIn;
            
            $scope.credentials = {
                username : "",
                password : ""
            };
            
            $scope.login = function() {
                authService
                    .login($scope.credentials.username, $scope.credentials.password)
                    .success(function() {
                        $scope.$storage.isLoggedIn = true;
                        $scope.isLoggedIn = true;
                    
                         //TODO: Figure out how to grab Current User Profile
                        //$scope.$storage.user = $scope.user;
                    
                        /*
                        for debugging:
                        console.log('SUCCESS: user:' + $scope.user);
                        */
                    
                        $state.go('newsfeed-index');
                    })
                    .error(function() {
                    
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
                delete $localStorage.user;
                $state.go('login');
            };
            
            
     }]);
})();

