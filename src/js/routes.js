(function() {
    "use strict";

    angular.module('spring-2885')
        .config(function($stateProvider, $urlRouterProvider){

            $urlRouterProvider.otherwise('/newsfeed');

            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'src/views/login/loginIndex.html',
                    data: {
                        requireLogin: false
                    }
             });

            $stateProvider
                .state('profile-list', {
                url: '/profiles',
                templateUrl: 'src/views/profile/profileIndex.html',
                data: {
                    requireLogin: true
                }
            });

            $stateProvider
                .state('profile-view', {
                url: '/profiles/:id',
                templateUrl: '/src/views/profile/profileShow.html',
                data: {
                    requireLogin: true
                }
            });

            $stateProvider
                .state('profile-edit', {
                url: '/profiles/:id/edit',
                templateUrl: '/src/views/profile/profileEdit.html',
                data: {
                    requireLogin: true
                }
            });

            $stateProvider
                .state('newsfeed-index', {
                url: '/newsfeed',
                templateUrl: 'src/views/newsfeed/newsFeedIndex.html',
                data: {
                    requireLogin: true
                }
            });

            $stateProvider
                .state('job-show', {
                url: '/jobs/:id',
                templateUrl: 'src/views/jobs/jobsShow.html',
                data: {
                    requireLogin: true
                }
            });

            $stateProvider
                .state('job-index', {
                url: '/jobs',
                templateUrl: 'src/views/jobs/jobsIndex.html',
                data: {
                    requireLogin: true
                }
            });

            $stateProvider
                .state('job-edit', {
                url: '/jobs/:id/edit',
                templateUrl: 'src/views/jobs/jobsEdit.html',
                data: {
                    requireLogin: true
                }
            });

            $stateProvider
                .state('job-create', {
                url: '/jobs/create/new',
                templateUrl: 'src/views/jobs/jobsCreate.html',
                data: {
                    requireLogin: true
                }
            });

            $stateProvider
                .state('job-my-jobs', {
                url: '/myjobs',
                templateUrl: 'src/views/jobs/jobsMyJobs.html',
                data: {
                    requireLogin: true
                }
            });

            $stateProvider
                .state('about', {
                url: '/about',
                templateUrl: 'src/views/info/about.html',
                data: {
                    requireLogin: false
                }
            });

            $stateProvider
                .state('user-agreement', {
                url: '/ua',
                templateUrl: 'src/views/info/userAgreement.html',
                data: {
                    requireLogin: false
                }
            });

            $stateProvider
                .state('privacy', {
                url: '/privacy',
                templateUrl: 'src/views/info/privacyPolicy.html',
                data: {
                    requireLogin: false
                }
            });

            $stateProvider
                .state('community-guidelines', {
                url: '/community-guidelines',
                templateUrl: 'src/views/info/communityGuidelines.html',
                data: {
                    requireLogin: false
                }
            });

            $stateProvider
                .state('contact-us', {
                url: '/contact',
                templateUrl: 'src/views/info/contactUs.html',
                data: {
                    requireLogin: false
                }
            });

            $stateProvider
                .state('loggedOut-postAJob', {
                url: '/postAJob',
                templateUrl: 'src/views/loggedOutPostAJob.html',
                data: {
                    requireLogin: false
                }
            });

            $stateProvider
                .state('forgot-password', {
                url: '/forgot',
                templateUrl: 'src/views/lostpassword/forgotPassword.html',
                data: {
                    requireLogin: false
                }
            });

            $stateProvider
                .state('reset-password', {
                url: '/reset',
                templateUrl: 'src/views/lostpassword/resetPassword.html',
                data: {
                    requireLogin: false
                }
            });

            $stateProvider
                .state('404', {
                url: '/404',
                templateUrl: 'src/views/status/404.html',
                data: {
                    requireLogin: false
                }
            });

            $stateProvider
                .state('admin', {
                url: '/admin',
                templateUrl: 'src/views/admin/admin.html',
                data: {
                    requireLogin: true
                }
            });

            $stateProvider
                .state('user-settings', {
                url: '/:id/preferences',
                templateUrl: 'src/views/profile/userSettings.html',
                data: {
                    requireLogin: true
                }
            });

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