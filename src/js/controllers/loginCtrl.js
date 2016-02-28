(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('loginCtrl', ['$scope', '$state', '$http', 
                function($scope, $state, $http) {
            console.log('loginCtrl');
            var me = this;
            me.credentials = {
                username: "rob",
                password: "welcome"
            };
            var authenticate = function(callback) {
                $http.get('user').success(function(data) {
                console.log("/user success: " + JSON.stringify(data));
                    if (data.name) {
                        console.log("And Authenticated!");
                        $scope.isLoggedIn = true;
                    } else {
                        console.log("But received invalid data.");
                        $scope.isLoggedIn = false;
                    }
                    if (callback) callback();
                }).error(function(response) {
                    console.log("/user failure." + JSON.stringify(response));
                    $scope.isLoggedIn = false;
                    if (callback) callback();
                });
            };

            $scope.login = function(){
                var urlEncodedData = 'username=' + 
                    encodeURIComponent(me.credentials.username)+ 
                    '&password=' +
                    encodeURIComponent(me.credentials.password);
                $http.post('formlogin', urlEncodedData, {
                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }                    
                }).then(function successCallback(response) {
                        authenticate();
                        console.log("Login succeeded " + JSON.stringify(response));
                        $state.go('newsfeed-index');
                        $scope.error = false;
                        $scope.isLoggedIn = true;
                    }, function errorCallback(response) {
                        $scope.isLoggedIn = false;
                        console.log("Login failed " + JSON.stringify(response));
                        $state.go('login');
                        $scope.error = true;
                    });
            };
            $scope.logout = function() {
                $scope.isLoggedIn = false;
                $state.go('login');
            };
    }]);
})();
    