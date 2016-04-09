 (function() {
   "use strict";
     
   angular.module('spring-2885')
        .config(function($stateProvider, $urlRouterProvider){
     
            //If not a page redirect to login
            $urlRouterProvider.otherwise('/newsfeed');
            
            //loging page
            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'src/views/login/loginIndex.html',
                    //controller: 'loginCtrl'
                    data: {
                        requireLogin: false
                    }
             });
     
//            //sign up page
//            $stateProvider
//                .state('sign-up', {
//                url: '/signup',
//                templateUrl: 'src/views/login/signupIndex.html',
//                controller: 'signupCtrl'
//            });
     
            //list profiles
            $stateProvider
                .state('profile-list', {
                url: '/profiles',
                templateUrl: 'src/views/profile/profileIndex.html',
                controller: 'profileIndexCtrl',
                data: {
                    requireLogin: true
                }
            });
     
            //view a profile
            $stateProvider
                .state('profile-view', {
                url: '/profiles/:id',
                templateUrl: '/src/views/profile/profileShow.html',
                controller: 'profileShowCtrl',
                data: {
                    requireLogin: true
                }
            });
     
            //edit profile
            $stateProvider
                .state('profile-edit', {
                url: '/profiles/:id/edit',
                templateUrl: '/src/views/profile/profileEdit.html',
                controller: 'profileEditCtrl',
                data: {
                    requireLogin: true
                }
            });
     
            //newesfeed index
            $stateProvider
                .state('newsfeed-index', {
                url: '/newsfeed',
                templateUrl: 'src/views/newsfeed/newsFeedIndex.html',
                controller: 'newsfeedIndexCtrl',
                data: {
                    requireLogin: true
                }
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
                controller: 'jobsShowCtrl',
                data: {
                    requireLogin: true
                }
            });
     
            //Jobs list page
            $stateProvider
                .state('job-index', {
                url: '/jobs',
                templateUrl: 'src/views/jobs/jobsIndex.html',
                controller: 'jobsIndexCtrl',
                data: {
                    requireLogin: true
                }
            });
     
            //create-edit a job posting
            $stateProvider
                .state('job-edit', {
                url: '/jobs/:id/edit',
                templateUrl: 'src/views/jobs/jobsEdit.html',
                controller: 'jobsEditCtrl',
                data: {
                    requireLogin: true
                }
            });
     
            //show events
            $stateProvider
                .state('events-index', {
                url: '/events',
                templateUrl: 'src/views/events/eventsShow.html',
                controller: 'eventsShowCtrl',
                data: {
                    requireLogin: true
                }
            });
     
            //view an event
            $stateProvider
                .state('events-show', {
                url: '/events/:id',
                templateUrl: 'src/views/events/eventsIndex.html',
                controller: 'eventsIndexCtrl',
                data: {
                    requireLogin: true
                }
            });
     
            //create-edit an event
            $stateProvider
                .state('events-edit', {
                url: '/events/:id/edit',
                templateUrl: 'src/views/events/eventsEdit.html',
                controller: 'eventsEditCtrl',
                data: {
                    requireLogin: true
                }
            });
       
            //about us page
            $stateProvider
                .state('about', {
                url: '/about',
                templateUrl: 'src/views/info/about.html',
                data: {
                    requireLogin: false
                }
            });
       
            //User Agreement
            $stateProvider
                .state('user-agreement', {
                url: '/ua',
                templateUrl: 'src/views/info/userAgreement.html',
                data: {
                    requireLogin: false
                }
            });
       
            //Privacy Policy
            $stateProvider
                .state('privacy', {
                url: '/privacy',
                templateUrl: 'src/views/info/privacyPolicy.html',
                data: {
                    requireLogin: false
                }
            });
       
            //Community Guidlines
            $stateProvider
                .state('community-guidelines', {
                url: '/community-guidlines',
                templateUrl: 'src/views/info/communityGuidlines.html',
                data: {
                    requireLogin: false
                }
            });
       
            //Contact Us
            $stateProvider
                .state('contact-us', {
                url: '/contact',
                templateUrl: 'src/views/info/contactUs.html',
                data: {
                    requireLogin: false
                }
            });
       
            //Logged Out Post a job
            $stateProvider
                .state('loggedOut-postAJob', {
                url: '/postAJob',
                templateUrl: 'src/views/loggedOutPostAJob.html',
                data: {
                    requireLogin: false
                }
            });
       
            //forgot password
            $stateProvider
                .state('forgot-password', {
                url: '/forgot',
                templateUrl: 'src/views/lostpassword/forgotPassword.html',
                data: {
                    requireLogin: false
                }
            });
       
            //reset password
            $stateProvider
                .state('reset-password', {
                url: '/reset',
                templateUrl: 'src/views/lostpassword/resetPassword.html',
                data: {
                    requireLogin: false
                }
            });
            
            //404
            $stateProvider
                .state('404', {
                url: '/404',
                templateUrl: 'src/views/status/404.html',
                data: {
                    requireLogin: false
                }
            });
       
            //Admin
            $stateProvider
                .state('admin', {
                url: '/adminMessageCenter',
                templateUrl: 'src/views/admin/admin.html',
                data: {
                    requireLogin: true
                }
            });
       
            //Preferences
            $stateProvider
                .state('user-settings', {
                url: '/:id/preferences',
                templateUrl: 'src/views/profile/userSettings.html',
                data: {
                    requireLogin: true
                }
            });
       
            //Help
            $stateProvider
                .state('help', {
                url: '/help',
                templateUrl: 'src/views/info/help.html',
                data: {
                    requireLogin: true
                }
            });
            
        });
 })();