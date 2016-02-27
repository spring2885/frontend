(function() {
    "use strict";
    angular.module('spring-2885')
        .config(['$locationProvider', function($locationProvider){
        $locationProvider.html5Mode({ enabled: true, requireBase: false});
        $locationProvider.hashPrefix = '!';
        }])
        .config(['$translateProvider', function($translateProvider){
            $translateProvider.useStaticFilesLoader({
                prefix: '/languages/lang-',
                suffix: '.json'
            });
            $translateProvider.preferredLanguage('en_US');
            $translateProvider.fallbackLanguage('en_US');
            $translateProvider.useSanitizeValueStrategy('escape');
        }]);
})();
