(function() {
    "use strict";
    angular.module('spring-2885')
    .factory('abuseService', function($http) {
  		var service = {};
	   	service.abuse = function(item_id, item_type, item_url, notes) {
	    	console.log('abuseService.abuse flagging: ' + item_id);
            var data = {
              item_type : item_type,
              item_id : item_id,
              item_url : item_url,
              notes : notes
            };
            $http.post('/api/v1/approvals/request/abuse', data)
            .success(
              function() {
                console.log("success on id: " + item_id);
              });
	   	};
	   	return service;
	});

})();
