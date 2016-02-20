(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('profileIndexCtrl', ['$scope', '$state', '$http', function($scope, $state, $http){
            $scope.profiles = [];
            $http.get('/backend/profiles.json').success(
                 function(response){
                     $scope.profiles = response;
                     return $scope.profiles;
                 });
        
    }]);
})();

