(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('profileShowCtrl', ['$scope', '$stateParams', '$http', '$state', function($scope, $stateParams, $http, $state){
                 $scope.profile = {};
                 $http.get('/api/v1/profiles/' + $stateParams.id)
                     .success(
                      function(response){
                          $scope.profile = response;
                          return $scope.profile;
                      })
                    .error(
                     function(response){
                         $state.go('404');
                     });
    }]);
})();

$(document).ready(function() {
    $('#taskForm')
        .formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                task: {
                    validators: {
                        notEmpty: {
                            message: 'The task is required'
                        }
                    }
                },
                description: {
                    validators: {
                        notEmpty: {
                            message: 'The description is required'
                        }
                    }
                }
            }
        })
        .on('success.field.fv', function(e, data) {
            if (data.fv.getInvalidFields().length > 0) {    // There is invalid field
                data.fv.disableSubmitButtons(true);
            }
        });
});