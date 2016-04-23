(function() {
    "use strict";
    angular.module('spring-2885')
        .controller('forgotPasswordCtrl', ['$http', '$scope', '$state', function($http, $scope, $state){
                 
                  //$scope.resetPassEmail = "";
                  $scope.forgotData = {
                        email : ''
                  };
            
            
                  $scope.SendEmail = function (){
                      console.log('JSON Sent to Server: ' + JSON.stringify($scope.forgotData));
                      var url = '/auth/forgot';
                      $http.post(url, $scope.forgotData)
                         .success(function(response){
                             $state.go('reset-password');
                         })
                         .error(function(response){
                             console.log("Error: " + JSON.stringify(response));
                         });
                  };
//            $scope.SendEmail = function () {
//               
//                $http({
//                    method  : 'POST',
//                    url     : 'auth/forgot',
//                    data    : $.param(forgotData),
//                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  
//                    }).then(function successCallback(response) {
//                        console.log($scope.resetPassEmail);
//                        
//                        console.log("Reset Email Sent succeeded " + JSON.stringify(response));
//
//                    });
//            };
                 
            
                  $scope.CancelReset = function(){
                      window.history.back();
                  };
    }]);
})();