(function() {
    "use strict";   
     angular.module('spring-2885')
        .directive('loggedInFooter', function(){
            return {
                restrict: 'AE',
                replace: true,
                templateUrl: '/src/templates/footer/signedInFooter.html'
            };
     });
})();