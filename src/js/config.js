(function() {
    "use strict";
    angular.module('spring-2885')
        .config(['$locationProvider', function($locationProvider){
        $locationProvider.html5Mode({ enabled: true, requireBase: false});
        $locationProvider.hashPrefix = '!';
        }]);
})();
