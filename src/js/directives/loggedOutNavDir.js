(function() {
    "use strict";   
     angular.module('spring-2885')
        .directive('loggedOutNav', function(){
            return {
                restrict: 'AE',
                replace: true,
                templateUrl: '/src/templates/navbar/signedOutNav.html'
            };
     });
})();