(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('signUpCtrl', ['$scope', '$state', '$http', '$localStorage', 'authService', 'authDefaults', function($scope, $state, $http, $localStorage, authService, authDefaults) {
       console.log("signUpCtrl");
           
        $scope.formData = {};
        console.log('isLoggedIn ' + $localStorage.isLoggedIn);
        
        function getAuth(credentials) {
            authService
                .login(credentials.email, credentials.password)
                 .error(function() {
                        console.log("FAILURE: login failed: " + $scope.credentials.username);
                        var msg = $translate.instant('login.FAILED');
                        MessageService.broadcast(msg, {color: 'danger'});
                });
        };

        $scope.signup = function() {

        	$http({
			method  : 'POST',
			url     : 'newuser',
			data    : $.param($scope.formData),
			headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  
			}).then(function successCallback(response) {
                console.log($scope.formData);
                getAuth($scope.formData)
                console.log("Newuser succeeded " + JSON.stringify(response));
                $state.go('profile-edit');
            }, function errorCallback(response) {
                $scope.isLoggedIn = false;
                console.log("Newuser failed " + JSON.stringify(response));
                $state.go('login');
            });
        };
            
    }]);
})();

/////////////////
//$scope.login = function() {
//                authService
//                    .login($scope.credentials.username, $scope.credentials.password)
//                    .error(function() {
//                        console.log("FAILURE: login failed: " + $scope.credentials.username);
//                        var msg = $translate.instant('login.FAILED');
//                        MessageService.broadcast(msg, {color: 'danger'});
//                    });
//            };