(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('signUpCtrl', ['$scope', '$state', function($scope, $state){
            
            
            $scope.personType = { person:
                ['Current Student', 'Alumni', 'Faculty']
            };
            
            $scope.typeDropDown = [];
            $scope.typeDropDown.push($scope.personType.person[1]);
            
    }]);
})();