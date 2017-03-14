(function() {
    "use strict";
    angular.module('spring-2885')
        .config(['$locationProvider', function($locationProvider){
            $locationProvider.html5Mode({enabled: true, requireBase: false});
            $locationProvider.hashPrefix = '!';
            }])
        .config(['$translateProvider', function($translateProvider){
            $translateProvider.useStaticFilesLoader({
                prefix: '/src/assets/languages/',
                suffix: '.json'
            });
            $translateProvider
                .registerAvailableLanguageKeys(['en', 'es', 'fr', 'zh-CN', 'ar'], {
                    'en*': 'en',
                    'es*': 'es',
                    'fr*': 'fr',
                    'zh*': 'zh-CN',
                    'ar*': 'ar'
                })
                .determinePreferredLanguage()
                .useSanitizeValueStrategy('escape');
        }]);
})();

