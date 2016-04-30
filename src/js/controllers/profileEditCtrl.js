(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('profileEditCtrl', ['$scope', '$state', '$stateParams', '$http', '$localStorage', 'MessageService', '$translate', 
                    function($scope, $state, $stateParams, $http, $localStorage, MessageService, $translate){
                 
                 MessageService.configure({disabled:false, max:3, timeout:4500});
                                            
                 /** Put everything in Scope **/
                 $scope.profile = {};
                 $scope.message = {};
                 $scope.message.notes = '';
                 $scope.$storage = $localStorage;
                 $scope.graduationYears = [];
                 $scope.degreeTypes = [];
                 $scope.majors = [];
                 $scope.minors = [];
                 $scope.socialNetworks = [];
                 $scope.socilaSite = {};
                                            
                 $scope.socialName = '';
                 $scope.socialUrl = '';
                
                 var current = new Date();
                 $scope.thisYear = current.getFullYear();
                 /******************/
                                            
                 /** click functions **/                            
                 $scope.addToSocial = function() {
                     var fullSiteURL = $scope.socialSite.url + $scope.socialName;
                     $scope.profile.social_connections.push({
                         name: $scope.socialSite.id,
                         url: fullSiteURL
                     });
                     
                     //Reset Scope Vars
                     $scope.socialSite = {};
                     $scope.socialName = '';
                 };
                 
                 $scope.removeSocial = function(index){
                     $scope.profile.social_connections.splice(index,1);
                 };
                        
                $scope.requstFaculty =  function() {
                    
                    $http.post('/api/v1/approvals/request/faculty', $scope.message)
                    .success(
                        function(response) {
                            var msg =  $translate.instant('profile.AWAITING_APPROVAL');
                            MessageService.broadcast(msg, {color: 'default'});
                        })
                        .error(
                            function(response) {
                                 //console.log('FAILED: ' +JSON.stringify(response));
                                var msg =  $translate.instant('profile.APPROVAL_REQUEST_FAILED');
                                MessageService.broadcast(msg, {color: 'danger'});
                            });
                };
                 /******************/
                 
                 /* Post To Server */
                 $scope.updateProfile = function() {
                     var apiURL = '/api/v1/profiles/' + $scope.profile.id;
                     $http.put(apiURL , $scope.profile)
				        .success(
				            function(response) {
                                
                                $state.go('profile-view', { id: $scope.profile.id }, { reload: true });
                                var msg =  $translate.instant('profile.UPDATED');
                                MessageService.broadcast(msg, {color: 'success'});
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
                        
                $http.get('http://localhost:8001/api/v1/socialservice')
                    .success(
                    function(response){
                        $scope.socialNetworks = response;
                        //console.log(JSON.stringify(response));
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