(function() {
   "use strict";
   angular.module('spring-2885')   
       .controller('profileShowCtrl', ['$scope', '$stateParams', '$http', '$state', function($scope, $stateParams, $http, $state){
                $scope.profile = {};
                $http.get('/api/v1/profiles/' + $stateParams.id)
                    .success(
                     function(response){
                         $scope.profile = response;
                         console.log(JSON.stringify($scope.profile));
                         return $scope.profile;
                     })
                   .error(
                    function(response){
                        $state.go('404');
                    });
   }]);
})();