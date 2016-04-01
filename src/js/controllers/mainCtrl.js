(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('mainCtrl', ['$scope', '$rootScope', '$http', '$state',         function($scope, $rootScope, $http, $state){
            
            //var main = this;
           var isLoggedIn = false;
           $scope.isLoggedIn = isLoggedIn;
           $scope.credentials = {
                username : "",
                password : ""
            };
           
           console.log("isLoggedIn =>" + isLoggedIn);
            
            var authenticate = function(callback){
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
                    
                });
            };
            
             $scope.login = function() {
                 
                 console.log("TEST: " + $scope.credentials.username + " " + $scope.credentials.password);
                 var urlEncodedData = 'username=' +                                     encodeURIComponent($scope.credentials.username)+ 
                 '&password=' +
                 encodeURIComponent($scope.credentials.password);
                 
                 $http.post('user', urlEncodedData, {
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
            
           
            /*
            $scope.isLoggedIn = false;
            $scope.login = function(){
                $scope.isLoggedIn = true;
                $rootScope.user = userProfile;
                $state.go('newsfeed-index');
            };
            $scope.logout = function() {
                $scope.isLoggedIn = false;
                $scope.user = null;
                $state.go('login');
            };
            
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