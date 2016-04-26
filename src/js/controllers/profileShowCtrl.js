(function() {
   "use strict";
   angular.module('spring-2885')   
       .controller('profileShowCtrl', ['$scope', '$stateParams', '$http', '$state', function($scope, $stateParams, $http, $state){
                $scope.profile = {};
                $http.get('/api/v1/profiles/' + $stateParams.id)
                    .success(
                     function(response){
<<<<<<< HEAD
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
=======
                         $state.go('404');
                     });
    }]);
})();
>>>>>>> fdaedad38569938eadaee2c4ce0bb3ede01fb725
