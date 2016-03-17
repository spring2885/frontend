(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('chooseLangCtrl', ['$scope', function($scope){
            
           // $scope.storage = $localStorage
            $scope.chooseLang = function(langKey) {
              switch(langKey) {
                  case 'zh_CN':
                      break;
                  case 'en_US':
                      break;
                  case 'fr_FR':
                      break;
                 // case 'ar_AB':
                //      break;
                  default:
                      langKey = "en_US";
                      break;
              }
                $translate.use(langKey);
               // $scope.storage.profile.myLanguage = langKey;
                tmhDynamicLocale.set(langKet.toLowerCase().replace(/_/g, '-'));
            };
    }]);
})();
    