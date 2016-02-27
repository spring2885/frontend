(function() {
    "use strict";   
     angular.module('spring-2885')
        .directive('loggedOutFooter', function(){
            return {
                restrict: 'AE',
                replace: true,
                templateUrl: '/src/templates/footer/signedOutFooter.html'
            };
     });
})();