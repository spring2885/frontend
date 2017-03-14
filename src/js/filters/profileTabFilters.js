(function() {
    "use strict";
    angular.module('spring-2885')
    .filter('students', function() {
        return function(input) {
            var students = [];
            angular.forEach(input, function(person) {
                if (person.variety === 'student') {
                    students.push(person);
                }
            });
            return students;
        };
    })
    .filter('alumni', function() {
        return function(input) {
            var alumni = [];
            angular.forEach(input, function(person) {
                if (person.variety === 'alumni') {
                    alumni.push(person);
                }
            });
            return alumni;
        };
    })
    .filter('faculty', function() {
        return function(input) {
            var faculty = [];
            angular.forEach(input, function(person) {
                if (person.variety === 'faculty') {
                    faculty.push(person);
                }
            });
            return faculty;
        };
    });
})();