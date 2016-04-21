(function() {
    "use strict";
    angular.module('spring-2885')
        .filter('newsStudent', function() {
            return function(input) {
                var students = [];
                angular.forEach(input, function(post) {
                    if (post.posted_by.variety === 'student') {
                        students.push(post);
                    }
                });
                return students;
            };

    })
    .filter('newsAlumni', function() {
        return function(input) {
            var alumni = [];
            angular.forEach(input, function(post) {
                if (post.posted_by.variety === 'alumni') {
                    alumni.push(post);
                }
            });
            return alumni;
        };
    })
    .filter('newsFaculty', function() {
        return function(input) {
            var faculty = [];
            angular.forEach(input, function(post) {
                if (post.posted_by.variety === 'faculty') {
                    faculty.push(post);
                }
            });
            return faculty;
        };
    });
    
})();