(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('loginCtrl', ['$scope', '$state', function($scope, $state){
            $scope.isLoggedIn = false;
            $scope.login = function(){
                $scope.isLoggedIn = true;
                $state.go('newsfeed-index');
            };
            $scope.logout = function() {
                $scope.isLoggedIn = false;
                $state.go('login');
            };
    }]);
})();
    