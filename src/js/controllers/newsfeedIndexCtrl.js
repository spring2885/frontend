(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('newsfeedIndexCtrl', ['$scope', '$rootScope', '$http', '$state', '$localStorage', function($scope, $rootScope, $http, $state, $localStorage){
                 
                 $scope.$storage = $localStorage;
                 $scope.newsfeed = [];
                 
                 var newsPost = {
                     title : '',
                     description : '',
                     visible_to : []
                     
                 };
                 
                 $scope.newPost = angular.copy(newsPost);
                 
                /*** Get News Posts Collection ***/
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
            
                  /*** Test for new since last Visit ***/
                  $scope.isNew = function(date1, date2){
                       return  Date.parse(date1) > Date.parse(date2);

                  };
            
                  /*** Scope of Edit for Show/hide ***/
                  $scope.editPost = function(){
                      $scope.edit = true;
                  };
            
                  /*** Add Comment ***/
                  $scope.addComment = function(postId, comment){
                      /*Make JSON */
                      var newComment = {};
                      var today = new Date(); //.toJSON().slice(0,10);
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
                      
                      $http.post('/api/v1/news_comment', newComment)
				        .success(
				            function(response) {
                                for( var i = 0; i < $scope.newsfeed.length; i++){
                                  if($scope.newsfeed[i].id === postId){
                                      $scope.newsfeed[i].comments.push(newComment);
                                   }
                                }
					           console.log("Comment succeeded");
				        });
                  };
            
            /*** New News Post ***/
            $scope.addNewPost = function(){
                
                $scope.newPost.posted = new Date();
                console.log('DATE: '+ $scope.newPost.posted);
                $scope.newPost.posted_by = {
                    id: $scope.$storage.user.id,
                    name: $scope.$storage.user.name,
                    image_url: $scope.$storage.user.image_url
                };
                
                console.log('POST: ' + JSON.stringify($scope.newPost));
                $http.post('/api/v1/news', $scope.newPost)
                    .success(
                        function(response) {
                            //reload page to update scope
                            $state.go($state.current, {}, {reload: true});
                            console.log('New Post Succeded');
                    });
                
            };
            
            /*** Reset/un-dirty New News Post ***/
            $scope.resetNewPost = function(){
                $scope.newPost = angular.copy(newsPost);
            };
            
            /*** Edit News Post ***/
            $scope.editNewsPost = function(editedPost){
                
                var apiURL = '/api/v1/news/' + editedPost.id;
                     $http.put(apiURL , editedPost)
				        .success(
				            function(response) {
					           console.log("UPDATE Post succeeded");
				        });
            };
            
            
            /*** Edit Comment ***/
            $scope.editNewsComment = function(comment){
                console.log(JSON.stringify(comment));
                var apiURL = '/api/v1/news_comment/' + comment.id;
                $http.put(apiURL, comment)
                    .success(
                        function(response) {
                            console.log('Edit Comment succeded');
                        });
            }; 
            
            /*** Remove a Comment ***/
            $scope.removeComment = function(commentID, newsID){
                var apiURL = '/api/v1/news_comment/' + commentID;
                
                //Delete the Comment in the Backend
                $http.delete(apiURL, '')
                    .success(
                        function(response) {
                            console.log('Comment Deleted');
                        });
                
                //Remove Comment from Scope
                for (var i = 0; i < $scope.newsfeed.length; i++) {
                    if ($scope.newsfeed[i].id === newsID) {
                        for (var j = 0; j < $scope.newsfeed[i].comments.length; j++) {
                            if ($scope.newsfeed[i].comments[j].id === commentID){
                                $scope.newsfeed[i].comments.splice(j,1);
                            }
                        }
                    }
                }
            };
            
            /*** Remove a News Post ***/
            $scope.remove = function(newsID){
                var apiURL = '/api/v1/news/' + newsID;
                //Delete the Post in the Backend
                $http.delete(apiURL, '')
                    .success(
                        function(response) {
                            console.log('Post Deleted');
                        });
                //Delete the post in Scope
                for (var i = 0; i < $scope.newsfeed.length; i++){
                    if ($scope.newsfeed[i].id === newsID){
                        $scope.newsfeed.splice(i, 1);
                    }
                }
                
            };
            
            /*** News Feed Filter Show/hide ***/
            $scope.allNews = true;
            $scope.studentNews = false;
            $scope.alumniNews = false;
            $scope.facultyNews = false;
            
            $scope.show = function(newsType) {
                switch(newsType) {
                    case 'all':
                        $scope.allNews = true;
                        $scope.studentNews = false;
                        $scope.alumniNews = false;
                        $scope.facultyNews = false;
                        break;
                    case 'students':
                        $scope.allNews = false;
                        $scope.studentNews = true;
                        $scope.alumniNews = false;
                        $scope.facultyNews = false;
                        break;
                    case 'alumni':
                        $scope.allNews = false;
                        $scope.studentNews = false;
                        $scope.alumniNews = true;
                        $scope.facultyNews = false;
                        break;
                    case 'faculty':
                        $scope.allNews = false;
                        $scope.studentNews = false;
                        $scope.alumniNews = false;
                        $scope.facultyNews = true;
                        break;
                }
            };
            
            
            
    }]);
})();