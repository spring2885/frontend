(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('loginCtrl', ['$scope', '$localStorage', function($scope, $localStorage){
//            $scope.isLoggedIn = false;
//            $scope.login = function(){
//                $scope.isLoggedIn = true;
//                $state.go('newsfeed-index');
//            };
//            $scope.logout = function() {
//                $scope.isLoggedIn = false;
//                $state.go('login');
//            };
//            
            $scope.user = $localStorage.userProfile;
    }]);
})();
    