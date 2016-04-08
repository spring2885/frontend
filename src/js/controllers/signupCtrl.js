(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('signUpCtrl', ['$scope', '$state', '$http', 
        function($scope, $state, $http) {
       console.log("signUpCtrl");
           
        $scope.formData = {};

        $scope.signup = function() {
        	console.log("signup()");
        	$http({
			method  : 'POST',
			url     : 'newuser',
			data    : $.param($scope.formData),
			headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  
			}).then(function successCallback(response) {
                console.log("Newuser succeeded " + JSON.stringify(response));
                $state.go('newsfeed-index');
            }, function errorCallback(response) {
                $scope.isLoggedIn = false;
                console.log("Newuser failed " + JSON.stringify(response));
                $state.go('login');
            });
        };
            
    }]);
})();