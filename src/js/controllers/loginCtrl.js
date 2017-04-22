(function() {
    "use strict";
    angular.module('spring-2885')
        .controller('loginCtrl', ['$scope', '$localStorage', function($scope, $localStorage) {
            $scope.user = $localStorage.userProfile;
    }]);
})();