(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('mainCtrl', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state){
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
    }]);
})();