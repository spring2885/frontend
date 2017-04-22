(function() {
    "use strict";
    angular.module('spring-2885')
        .controller('resetPasswordCtrl', ['$http', '$scope', '$state', 'MessageService', '$translate',
        function($http, $scope, $state, MessageService, $translate) {

            $scope.passwordEmail = "";
            $scope.newPassToken = "";
            $scope.newPassword = "";

            var resetData = {
                email: $scope.passwordEmail,
                token: $scope.newPassToken,
                new_password : $scope.newPassword
            };

            $scope.ResetPassword = function () {
                $http.post('/auth/reset', resetData)
                .success(function(response){
                    var msg = $translate.instant('password.RESET_SUCCESS');
                    MessageService.broadcast(msg, {color: 'success'});
                })
                .error(function(response) {
                    var msg = $translate.instant('password.RESET_FAILED');
                    MessageService.broadcast(msg, {color: 'danger'});
                    console.log(response);
                });
            };
    }]);
})();