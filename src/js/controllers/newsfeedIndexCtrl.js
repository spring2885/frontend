(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('newsfeedIndexCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http){
                 $scope.newsfeed = [];
                 $scope.user = $rootScope.user;
                 $scope.edit = false;
                 $http.get('/api/v1/news').success(
                      function(response){
                          $scope.newsfeed = response;
                          return $scope.newsfeed;
                      });
                  $scope.isNew = function(date1, date2){
                       return  Date.parse(date1) > Date.parse(date2);

                  };
                  $scope.editPost = function(){
                      $scope.edit = true;
                  };
    }]);
})();