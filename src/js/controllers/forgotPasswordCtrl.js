(function() {
    "use strict";
    angular.module('spring-2885')
        .controller('forgotPasswordCtrl', ['$http', '$scope', '$state', function($http, $scope, $state){
                  $scope.resetPassEmail = "";
                  var forgotData = {
                        email : $scope.resetPassEmail
                  };
                  $scope.SendEmail = function (){
                      $http.post('/auth/forgot', forgotData)
                         .success(function(response){
                             $state.go('reset-password');
                         })
                         .error(function(response){
                             console.log("Error: " + JSON.stringify(response));
                         });
                  };
                  $scope.CancelReset = function(){
                      window.history.back();
                  };
    }]);
})();