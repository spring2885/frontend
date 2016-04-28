(function() {
    "use strict";   
     angular.module('spring-2885')
        .directive('jobType', function(){
                return {
                    replace: 'true',
                    scope: {type: '@'},
                    templateUrl: '/src/templates/jobTypeDirTmpl.html'
                };
     });
})();