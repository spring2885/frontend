(function() {
    "use strict";
    angular.module('spring-2885')
    .factory('abuseService', function($http) {
  		var service = {};
	   	service.abuse = function(item_id, item_type, notes) {
	    	console.log('abuseService.abuse flagging: ' + item_id + " type: " + item_type);

	    	var urlFor = function(item_id, item_type) {
	    		if (item_type === 'JOB') {
	    			return "http://localhost:8001/jobs/" + item_id;
	    		} else if (item_type === 'NEWS') {
	    			return "http://localhost:8001/newsfeed/" + item_id;
	    		}
	    		return item_type + '/' + item_id;
	    	};
            var data = {
              item_type : item_type,
              item_id : item_id,
              item_url : urlFor(item_id, item_type),
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
