 (function() {
   "use strict";
     
   angular.module('spring-2885')
        .config(function($stateProvider, $urlRouterProvider){
     
            //If not a page redirect to login
            $urlRouterProvider.otherwise('/login');
            
            //loging page
            $stateProvider
                .state('login', {
                    url: '/',
                    templateUrl: 'src/views/login/loginIndex.html',
                    //controller: 'loginCtrl'
             });
     
            //sign up page
            $stateProvider
                .state('sign-up', {
                url: '/signup',
                templateUrl: 'src/views/login/signupIndex.html',
                controller: 'signupCtrl'
            });
     
            //list profiles
            $stateProvider
                .state('profile-list', {
                url: '/profiles',
                templateUrl: 'src/views/profile/profileIndex.html',
                controller: 'profileIndexCtrl'
            });
     
            //view a profile
            $stateProvider
                .state('profile-view', {
                url: '/profiles/:id',
                templateUrl: '/src/views/profile/profileShow.html',
                controller: 'profileShowCtrl'
            });
     
            //edit profile
            $stateProvider
                .state('profile-edit', {
                url: '/profiles/:id/edit',
                templateUrl: '/src/views/profile/profileEdit.html',
                controller: 'profileEditCtrl'
            });
     
            //newesfeed index
            $stateProvider
                .state('newsfeed-index', {
                url: '/newsfeed',
                templateUrl: 'src/views/newsfeed/newsFeedIndex.html',
                controller: 'newsfeedIndexCtrl'
            });
     
       /****These Functions are all hadled on the Newsfeed Index Page
            //show a single news item in a newsfeed
            $stateProvider
                .state('newsfeed-item', {
                url: '/newsfeed/:id',
                templateUrl: 'src/views/newsfeed/newsfeedShow.html',
                controller: 'newsfeedShowCtrl'
            });
     
            //create-edit a newsfeed post
            $stateProvider
                .state('newsfeed-edit', {
                url: '/newsfeed/:id/edit',
                templateUrl: 'src/views/newsfeed/newsfeedEdit.html',
                controller: 'newsfeedEditCtrl'
            });
            *****/
     
            //job view page
            $stateProvider
                .state('jobs-show', {
                url: '/jobs/:id',
                templateUrl: '/src/views/jobs/jobsShow.html',
                controller: 'jobsShowCtrl'
            });
     
            //Jobs list page
            $stateProvider
                .state('job-index', {
                url: '/jobs',
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
                .state('events-index', {
                url: '/events',
                templateUrl: 'src/views/events/eventsShow.html',
                controller: 'eventsShowCtrl'
            });
     
            //view an event
            $stateProvider
                .state('events-show', {
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
       
            //about us page
            $stateProvider
                .state('about', {
                url: '/about',
                templateUrl: 'src/views/about.html'
            });
       
            //User Agreement
            $stateProvider
                .state('user-agreement', {
                url: '/userAgreement',
                templateUrl: 'src/views/userAgreement.html'
            });
       
            //Privacy Policy
            $stateProvider
                .state('privacy', {
                url: '/privacy',
                templateUrl: 'src/views/privacyPolicy.html'
            });
       
            //Community Guidlines
            $stateProvider
                .state('community-guidelines', {
                url: '/communityGuidlines',
                templateUrl: 'src/views/communityGuidlines.html'
            });
       
            //Contact Us
            $stateProvider
                .state('contact-us', {
                url: '/contact',
                templateUrl: 'src/views/contactUs.html'
            });
       
            //Logged Out Post a job
            $stateProvider
                .state('loggedOut-postAJob', {
                url: '/postAJob',
                templateUrl: 'src/views/loggedOutPostAJob.html'
            });
       
            //forgot password
            $stateProvider
                .state('forgot-password', {
                url: '/forgot',
                templateUrl: 'src/views/forgotPassword.html'
            });
       
            //Admin
            $stateProvider
                .state('admin', {
                url: '/adminMessageCenter',
                templateUrl: 'src/views/admin.html'
            });
            
        });
 })();