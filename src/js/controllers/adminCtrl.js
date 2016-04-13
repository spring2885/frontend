(function() {
    "use strict";
    angular.module('spring-2885')   
        .controller('adminCtrl', ['$scope', '$stateParams', '$http', '$state', 
        function($scope, $stateParams, $http, $state) {
			$scope.requests = [];
			$http.get('/api/v1/approvals/list?state=open')
			 .success(
			 function(response) {
			    $scope.requests = response;
			    return $scope.requests;
			 })
			.error(
			function(response) {
			 	console.log("error received: " + response);
				$state.go('404');
			 });

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
    			var id = $scope.requests[index].id;
    			console.log("Approve: " + id);
    			verdict(id, true, "");
    		};
    		$scope.rejectItem = function(index) {
    			var id = $scope.requests[index].id;
    			console.log("Reject: " + id);
    			verdict(id, false, "");
    		};
    }]);
})();
