(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('newsfeedIndexCtrl', ['$scope', '$http', function($scope, $http){
                 $scope.newsfeed = [];
                 $http.get('/backend/newsfeed.json').success(
                      function(response){
                          $scope.newsfeed = response;
                          return $scope.newsfeed;
                      });
    }]);
})();