(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('profileEditCtrl', ['$scope', '$stateParams', '$http', '$localStorage', 
                                        function($scope, $stateParams, $http, $localStorage){
                 
                 /** Put everything in Scope **/
                 $scope.profile = {};
                 $scope.$storage = $localStorage;
                 $scope.graduationYears = [];
                 $scope.degreeTypes = [];
                 $scope.majors = [];
                 $scope.minors = [];
                                            
                 $scope.socialName = '';
                 $scope.socialUrl = '';
                
                 var current = new Date();
                 $scope.thisYear = current.getFullYear();
                 /******************/
                                            
                 /** click functions **/                            
                 $scope.addToSocial = function() {
                     $scope.profile.social_connections.push({
                         name: $scope.socialName,
                         url: $scope.socialUrl
                     });
                     
                     //Reset Scope Vars
                     $scope.socialName = '';
                     $scope.socialUrl = '';
                 };
                 
                 $scope.removeSocial = function(index){
                     $scope.profile.social_connections.splice(index,1);
                 };
                 /******************/
                 
                 /* Post To Server */
                 $scope.updateProfile = function() {
                     var apiURL = '/api/v1/profiles/' + $scope.profile.id;
                     $http.put(apiURL , $scope.profile)
				        .success(
				            function(response) {
					           console.log("UPDATE succeeded");
				        });
                 };                       
                /******************/                            
                                            
                                            
                /*Get Data */                            
                 $http.get('/api/v1/profiles/' + $scope.$storage.user.id)
                     .success(
                      function(response){
                          $scope.profile = response;
                          return $scope.profile;
                      })
                    .error(
                     function(response){
                         $state.go('404');
                     });
                 $http.get('src/assets/core/graduationYears.json')
                    .success(
                        function(response){
                            $scope.graduationYears = response;
                            return $scope.graduationYears;
                        }
                    );
                 $http.get('src/assets/core/ndnuDegreeTypes.json')
                    .success(
                        function(response){
                            $scope.degreeTypes = response;
                            return $scope.degreeTypes;
                        }
                    );
                 $http.get('src/assets/core/ndnuMajors.json')
                    .success(
                        function(response){
                            $scope.majors = response;
                            return $scope.majors;
                        }
                    );
                 $http.get('src/assets/core/ndnuMinors.json')
                    .success(
                        function(response){
                            $scope.minors = response;
                            return $scope.minors;
                        }
                    );
                /******************/
                
    }]);
})();