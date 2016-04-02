(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('profileIndexCtrl', ['$scope', '$http', function($scope, $http){
            $scope.profiles = [];
            $http.get('/api/v1/profiles').success(
                 function(response){
                     $scope.profiles = response;
                     return $scope.profiles;
                 });
        
    }]);
})();

