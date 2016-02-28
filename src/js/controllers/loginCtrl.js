(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('loginCtrl', ['$scope', '$state', '$http', 
                function($scope, $state, $http) {
            console.log('loginCtrl');
            var me = this;
            /** TODO: Get this from the page. */
            me.credentials = {
                username: "rob",
                password: "welcome"
            };
            /** 
              * Calls /user to check if the user is authenticated, and also
              * returns data.name which is the name of the user.
              */
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

            /**
             * Calls /formlogin as a post to login.  This used to be /login
             * but conflicted with the /login in here, so I moved it on the
             * backend.
             */
            $scope.login = function(){
                var urlEncodedData = 'username=' + 
                    encodeURIComponent(me.credentials.username)+ 
                    '&password=' +
                    encodeURIComponent(me.credentials.password);
                $http.post('formlogin', urlEncodedData, {
                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }                    
                }).then(function successCallback(response) {
                        /**
                         * Since /formlogin will always return a 200, we need to now
                         * check with /user to see if we're authenticated.
                         * Reading http://blog.ionic.io/angularjs-authentication/ makes
                         * it seem like if we set withCredentials on the $http object
                         * then the JSESSIONID will be included on all requests.
                         * Also http://stackoverflow.com/questions/17064791/http-doesnt-send-cookie-in-requests
                         */
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
            /**
             * This isn't implemented but should just call a get on /logout
             * and then set isLoggedIn to false.
             */
            $scope.logout = function() {
                $scope.isLoggedIn = false;
                $state.go('login');
            };
    }]);
})();
    