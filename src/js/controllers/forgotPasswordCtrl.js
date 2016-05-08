(function() {
    "use strict";
    angular.module('spring-2885')
        .controller('forgotPasswordCtrl', ['$http', '$scope', '$state', function($http, $scope, $state){
                 
            $scope.forgotData = {};
            
            $scope.SendEmail = function () {
               
                $http({
                    method  : 'POST',
                    url     : 'auth/forgot',
                    data    : $.param($scope.forgotData),
                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  
                    }).then(function successCallback(response) {
                        //console.log($scope.forgotData);
                        
                        //console.log("Reset Email Sent succeeded " + JSON.stringify(response));

                    }, function errorCallback(response) {
                        
                        //console.log("RESET failed " + JSON.stringify(response));
                });
            };
                 
            
                  $scope.CancelReset = function(){
                      window.history.back();
                  };
    }]);
})();