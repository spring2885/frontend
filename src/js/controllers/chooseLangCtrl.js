(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('chooseLangCtrl', ['$scope', '$translate', 
        function($scope, $translate) {

            $scope.chooseLang = function(langKey) {
                if ($scope.selected) { langKey = $scope.selected; }

                switch(langKey) {
                    case 'en':
                        langKey = 'en';
                        break;
                    case 'es':
                        langKey = 'es';
                        break;
                    case 'fr':
                        langKey = 'fr';
                        break;
                    case 'zh':
                        langKey = 'zh-CN';
                        break;
                    case 'ar':
                        langKey = 'ar';
                        break;
                    default:
                        langKey = 'en';
                        break;
                }

                $translate.use(langKey);
            };
    }]);
})();