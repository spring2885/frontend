(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('mainCtrl', ['$scope', '$rootScope', '$http', '$state', '$localStorage',
            function($scope, $rootScope, $http, $state, $localStorage) {
            
            //var main = this;
            var isLoggedIn = function() {
                console.log("isLoggedIn: ");
                var user = $localStorage.user;
                if (!user) {
                    console.log("isLoggedIn: false");
                    return false;
                }
                console.log("isLoggedIn: enc: " + $localStorage.enc);

                $http.defaults.headers.common.Authorization = 'Basic ' + $localStorage.enc;
                return true;
            };
            $scope.isLoggedIn = isLoggedIn();
            $scope.credentials = {
                username : "",
                password : ""
            };
           
           console.log("isLoggedIn =>" + isLoggedIn());
            
            var authenticate = function(enc, callback) {
                var result = false;
                $http.defaults.headers.common.Authorization = 'Basic ' + enc;
                $http.get('user').success(function(data) {
                    console.log("/user success: " + JSON.stringify(data));
                    if (data.name) {
                        console.log("Authenticated as: " + data.name);
                        $scope.isLoggedIn = true;
                        $localStorage.user = data.name;
                        $localStorage.enc = enc;
                        result = true;
                    } else {
                        console.log("But received invalid data.");
                        $scope.isLoggedIn = false;
                        /** Clear the Authorization header. */
                        $http.defaults.headers.common.Authorization = 'Basic ';
                        delete $localStorage.enc;
                        delete $localStorage.user;
                    }
                    if (callback) callback();
                    return result;
                });
            };
            
             $scope.login = function() {
                 
                var stringToEncode = $scope.credentials.username + ":" + $scope.credentials.password;
                console.log("TEST: " + stringToEncode);
                /** TODO: sean - you want to save this enc block into the rootScope probably */
                var enc = window.btoa(stringToEncode);
                $http.defaults.headers.common.Authorization = 'Basic ' + enc;

                 $http.get('user')
                 .then(function successCallback(response) {
                     authenticate(enc);
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
                /** Clear the Authorization header. */
                $http.defaults.headers.common.Authorization = 'Basic ';
                delete $localStorage.enc;
                delete $localStorage.user;

                $scope.isLoggedIn = false;
                $state.go('login');
            };
            
            /*
            var userProfile = {
                name: "The Dude",
                myLang: "en_US",
                personType: "Student",
                id: "1989",
                last_login: "2-15-16"
            };
            //for dev only
            $rootScope.user = userProfile; 
            */
    }]);
})();