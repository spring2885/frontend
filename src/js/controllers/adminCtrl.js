(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('adminCtrl', ['$scope', '$stateParams', '$http', '$state', 

        function($scope, $stateParams, $http, $state) {
	        var getApprovals = function(type, callback) {
				$http.get('/api/v1/approvals/list?state=open&type=' + type)
				 .success(
				 function(response) {
				 	if (callback) callback(response);
				 })
				.error(
				function(response) {
				 	console.log("error received: " + response);
				 });
	        };

			var verdict = function(id, approved, notes) {
				var data = {
					id : id,
					approved : approved ? "true" : "false",
					notes : notes
				};
				$http.post('/api/v1/approvals/verdict', data)
				.success(
				function(response) {
					console.log("success on id: " + id);
				});
			};

    		$scope.approveItem = function(index) {
    			var id = $scope.faculty_requests[index].id;
    			console.log("Approve: " + id);
    			verdict(id, true, "");
    		};
    		$scope.rejectItem = function(index) {
    			var id = $scope.faculty_requests[index].id;
    			console.log("Reject: " + id);
    			verdict(id, false, "");
    		};

			getApprovals('FACULTY', 
				function(response) { $scope.faculty_requests = response; } );
			getApprovals('ABUSE', 
				function(response) { $scope.abuse_requests = response; } );
    		
    }]);
})();
