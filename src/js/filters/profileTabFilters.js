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
    })
    .filter('classOf', function() {
        return function(input) {
            var classOf = [];
            angular.forEach(input, function(person) {
                if (person.graduation_year === $storage.user.graduation_year) {
                    classOf.push(person);
                }
            });
            return classOf;
        };
    })
    .filter('major', function() {
        return function(input) {
            var major = [];
            angular.forEach(input, function(person) {
                if (person.degree_major === $storage.user.degree_major) {
                    major.push(person);
                }
            });
            return major;
        };
    })
    .filter('department', function() {
        return function(input) {
            var department = [];
            angular.forEach(input, function(person) {
                if (person.faculty_department === $storage.user.faculty_department) {
                    department.push(person);
                }
            });
            return department;
        };
    });
})();