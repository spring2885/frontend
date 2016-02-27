(function() {
    "use strict";   
     angular.module('spring-2885')
        .directive('loggedInNav', function(){
            return {
                restrict: 'AE',
                replace: true,
                templateUrl: '/src/templates/navbar/signedInNav.html'
            };
     });
})();