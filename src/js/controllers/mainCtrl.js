(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('mainCtrl', ['$scope', '$state', function($scope, $state){
            $scope.isLoggedIn = false;
            $scope.login = function(){
                $scope.isLoggedIn = true;
                $scope.user = userProfile;
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
                id: "99999"
            };
    }]);
})();