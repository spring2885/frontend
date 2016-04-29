(function() {
    "use strict";
    angular.module('spring-2885')
        .controller('resetPasswordCtrl', ['$http', '$scope', '$state', function($http, $scope, $state){
                  $scope.passwordEmail = "";
                  $scope.newPassToken = "";
                  $scope.newPassword = "";
                  var resetData = {
                        email : $scope.passwordEmail,
                        token : $scope.newPassToken,
                        new_password : $scope.newPassword
                  };
                  $scope.ResetPassword = function (){
                      $http.post('/auth/reset', resetData)
                         .success(function(response){
                             console.log("Success: " + JSON.stringify(response));
                         })
                         .error(function(response){
                             console.log("Error: " + JSON.stringify(response));
                         });
                  };
    }]);
})();