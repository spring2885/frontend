(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('signUpCtrl', ['$scope', '$state', '$http', '$localStorage', 'authService', 'MessageService', '$translate', 'authDefaults', 
            function($scope, $state, $http, $localStorage, authService, MessageService, $translate, authDefaults) {
           
        $scope.formData = {};
        $scope.acceptTerms = true;
        
        MessageService.configure({disabled:false, max:3, timeout:3500});
        $scope.acceptAlert = function() {
            var msg = $translate.instant('signup.ACCEPT_TERMS_ERROR');
            MessageService.broadcast(msg, {color: 'danger'});
        };
        
        function getAuth(credentials) {
            authService
                .login(credentials.email, credentials.password)
                .error(function() {
                    var msg = $translate.instant('login.FAILED');
                    MessageService.broadcast(msg, {color: 'danger'});
                });
        }

        $scope.createUser = function() {
            $http({
                method  : 'POST',
                url     : 'newuser',
                data    : $.param($scope.formData),
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  
            }).then(function successCallback(response) {
                getAuth($scope.formData);
                var msg = $translate.instant('signup.WELCOME');
                MessageService.broadcast(msg, {color: 'success'});
            }, function errorCallback(response) {
                $scope.isLoggedIn = false;
                var msg = $translate.instant('signup.FAILED');
                MessageService.broadcast(msg, {color: 'danger'});
                $state.go('login');
            });
        };
    }]);
})();
