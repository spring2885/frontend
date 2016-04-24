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
     
     
            //job view page
            $stateProvider
                .state('job-show', {
                url: '/jobs/:id',
                templateUrl: 'src/views/jobs/jobsShow.html',
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
     
            //edit a job posting
            $stateProvider
                .state('job-edit', {
                url: '/jobs/:id/edit',
                templateUrl: 'src/views/jobs/jobsEdit.html',
                //controller: 'jobsEditCtrl',
                data: {
                    requireLogin: true
                }
            });

            //create a job posting
            $stateProvider
                .state('job-create', {
                url: '/jobs/create/new',
                templateUrl: 'src/views/jobs/jobsCreate.html',
                //controller: 'jobsCreatePostCtrl',
                data: {
                    requireLogin: true
                }
            });
     
            //see your job postings
            //create a job posting
            $stateProvider
                .state('job-my-jobs', {
                url: '/myjobs',
                templateUrl: 'src/views/jobs/jobsMyJobs.html',
                //controller: 'jobsCreatePostCtrl',
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
                url: '/admin',
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
                    requireLogin: false
                }
            });
            
        });
 })();