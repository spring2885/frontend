(function() {
    "use strict";
    angular.module('spring-2885')
        .controller('forgotPasswordCtrl', ['$http', '$scope', '$state', 'MessageService', '$translate',
        function($http, $scope, $state, MessageService, $translate) {

            $scope.forgotData = {};

            $scope.SendEmail = function () {
                $http({
                    method: 'POST',
                    url: 'auth/forgot',
                    data: $.param($scope.forgotData),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                })
                .then(function successCallback(response) {
                    var msg = $translate.instant('password.RESET_REQUEST_SUCCESS');
                    MessageService.broadcast(msg, {color: 'success'});
                }, function errorCallback(response) {
                    var msg = $translate.instant('password.RESET_REQUEST_FAILED');
                    MessageService.broadcast(msg, {color: 'danger'});
                    console.log(response);
                });
            };
            
            $scope.CancelReset = function(){
                window.history.back();
            };
    }]);
})();