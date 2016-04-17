(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('newsfeedIndexCtrl', ['$scope', '$rootScope', '$http', '$state', '$localStorage', function($scope, $rootScope, $http, $state, $localStorage){
                 
                 $scope.$storage = $localStorage;
                 $scope.newsfeed = [];
                 
                 $scope.newPost = '';
//                $scope.newPost.title ='';
//                $scope.newPost.description ='';
//                $scope.visible_to = [];
            
                $http.get('/api/v1/news')
                     .success(
                      function(response){
                          $scope.newsfeed = response;
                          return $scope.newsfeed;
                      })
                    .error(
                     function(response){
                         $state.go('404');
                     });
                  $scope.isNew = function(date1, date2){
                       return  Date.parse(date1) > Date.parse(date2);

                  };
                  $scope.editPost = function(){
                      $scope.edit = true;
                  };
            
                  $scope.addComment = function(postId, comment){
                      /*Make JSON */
                      var newComment = {};
                      var today = new Date().toJSON().slice(0,10);
                      var userID = $scope.$storage.user.id;
                      var userName = $scope.$storage.user.name;
                      var userURL = $scope.$storage.user.image_url;
                      
                      newComment.news_id = postId;
                      newComment.text = comment;
                      newComment.posted = today;
                      newComment.posted_by = {
                          id: userID,
                          name: userName,
                          image_url: userURL
                      };
                      /*End JSON*/
                      console.log('Stringif JSON Object posted to /api/v1/news_comment: ' + JSON.stringify(newComment));
                      
                      /*Set the Comment in the Model */
                      /* To be moved to .success */
                      for( var i = 0; i < $scope.newsfeed.length; i++){
                          if($scope.newsfeed[i].id === postId){
                              $scope.newsfeed[i].comments.push(newComment);
                          }
                      }
                      
                      $http.post('/api/v1/news_comment', newComment)
				        .success(
				            function(response) {
                                for( var i = 0; i < $scope.newsfeed.length; i++){
                                  if($scope.newsfeed[i].id === postId){
                                      $scope.newsfeed[i].comments.push(newComment);
                                   }
                                }
					           console.log("Comment succeeded " + JSON.stringify(response));
				        });

//                      $http({
//                        method  : 'POST',
//                        url     : '/api/v1/news_comment',
//                        data    : $.param(newComment),
//                        headers : { 'Content-Type': 'application/json' }  
//                        }).then(function successCallback(response) {
//                            console.log("Comment succeeded " + JSON.stringify(response));
//                            
//                        }, function errorCallback(response) {
//                            
//                            console.log("Comment failed " + JSON.stringify(response));
//                            
//                        });
                  };
            
            
            $scope.addNewPost = function(){
                
                
                
//                $scope.newPost.posted = new Date().toJSON().slice(0,10);
//                $scope.newPost.posted_by = {
//                    id: $scope.$storage.user.name,
//                    name: $scope.$storage.user.name,
//                    image_url: $scope.$storage.user.image_url
//                }
                
//                 console.log('Stringif JSON Object posted to /api/v1/news_comment: ' + JSON.stringify($scope.newPost));
//                
            };
            
            $scope.editNewsPost = function(){
                //TODO
            };
            
            
            
    }]);
})();