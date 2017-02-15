(function() {
    "use strict";
    angular.module('spring-2885')
        .config(['$locationProvider', function($locationProvider){
            $locationProvider.html5Mode({enabled: true, requireBase: false});
            $locationProvider.hashPrefix = '!';
            }])
        .config(['$translateProvider', function($translateProvider){
            $translateProvider.useStaticFilesLoader({
                prefix: '/src/assets/languages/lang-',
                suffix: '.json'
            });
            $translateProvider
                .registerAvailableLanguageKeys(['en_US', 'es_ES', 'fr_FR', 'zh_CN'], {
                    'en*': 'en_US',
                    'es*': 'es_ES',
                    'fr*': 'fr_FR',
                    'zh*': 'zh_CN'
                })
                .determinePreferredLanguage()
                .useSanitizeValueStrategy('escape');
        }]);
})();

