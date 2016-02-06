 (function() {
   "use strict";
     
   angular.module('spring-2885')
        .config(function($stateProvider, $urlRouterProvider){
     
            //If not a page redirect to login
            $urlRouterProvider.otherwise('/login');
            
            //loging page
            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'src/views/login/loginIndex.html',
                    controller: 'loginCtrl'
             });
     
            //sign up page
            $stateProvider
                .state('sign-up', {
                url: '/signup',
                templateUrl: 'src/views/login/signupIndex.html',
                controller: 'signupCtrl'
            });
     
            //view a profile
            $stateProvider
                .state('profile-view', {
                url: '/profiles/:id',
                templateUrl: 'src/views/profile/profileIndex.html',
                controller: 'profileIndexCtrl'
            });
     
            //list profiles
            $stateProvider
                .state('profile-list', {
                url: '/profiles',
                templateUrl: 'src/views/profile/profileShow.html',
                controller: 'profileShowCtrl'
            });
     
            //edit profile
            $stateProvider
                .state('profile-edit', {
                url: '/profiles/:id/edit',
                templateUrl: 'src/views/profile/profileEdit.html',
                controller: 'profileEditCtrl'
            });
     
            //newesfeed show
            $stateProvider
                .state('newsfeed-show', {
                url: '/newsfeed',
                templateUrl: 'src/views/newsfeed/newsFeedShow.html',
                controller: 'newsfeedShowCtrl'
            });
     
            //show a single news item in a newsfeed
            $stateProvider
                .state('newsfeed-item', {
                url: '/newsfeed/:id',
                templateUrl: 'src/views/newsfeed/newsfeedIndex.html',
                controller: 'newsfeedIndexCtrl'
            });
     
            //create-edit a newsfeed post
            $stateProvider
                .state('newsfeed-edit', {
                url: '/newsfeed/:id/edit',
                templateUrl: 'src/views/newsfeed/newsfeedEdit.html',
                controller: 'newsfeedEditCtrl'
            });
     
            //job listing show
            $stateProvider
                .state('jobs-show', {
                url: '/jobs',
                templateUrl: 'src/views/jobs/jobsShow.html',
                controller: 'jobsShowCtrl'
            });
     
            //view a job
            $stateProvider
                .state('job-index', {
                url: '/jobs/:id',
                templateUrl: 'src/views/jobs/jobsIndex.html',
                controller: 'jobsIndexCtrl'
            });
     
            //create-edit a job posting
            $stateProvider
                .state('job-edit', {
                url: '/jobs/:id/edit',
                templateUrl: 'src/views/jobs/jobsEdit.html',
                controller: 'jobsEditCtrl'
            });
     
            //show events
            $stateProvider
                .state('events-show', {
                url: '/events',
                templateUrl: 'src/views/events/eventsShow.html',
                controller: 'eventsShowCtrl'
            });
     
            //view an event
            $stateProvider
                .state('events-index', {
                url: '/events/:id',
                templateUrl: 'src/views/events/eventsIndex.html',
                controller: 'eventsIndexCtrl'
            });
     
            //create-edit an event
            $stateProvider
                .state('events-edit', {
                url: '/events/:id/edit',
                templateUrl: 'src/views/events/eventsEdit.html',
                controller: 'eventsEditCtrl'
            });
            
        });
 })();