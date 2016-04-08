(function() {
    "use strict";
    angular.module('spring-2885')
        .run(function($rootScope, $localStorage, authService, $state) {
        authService.addEndpoint('/user');
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
           var requireLogin = toState.data.requireLogin;
           if (requireLogin && !$localStorage.isLoggedIn) {
                  event.preventDefault();
                  return $state.go('login');
           } 
        });
    });
})();