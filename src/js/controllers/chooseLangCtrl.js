(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('chooseLangCtrl', ['$scope', '$translate', function($scope, $translate){
            $scope.chooseLang = function(langKey) {
                if ($scope.selected) {langKey = $scope.selected;}

                switch(langKey) {
                    case 'en':
                        langKey = 'en_US';
                        break;
                    case 'es':
                        langKey = 'es_ES';
                        break;
                    case 'fr':
                        langKey = 'fr_FR';
                        break;
                    case 'zh':
                        langKey = 'zh_CN';
                        break;
                    default:
                        langKey = 'en_US';
                        break;
                }
                $translate.use(langKey);
            };
    }]);
})();