angular.module('radiologyLabsApp.factory', ['ngCookies'])
	.factory('Api', function($http, $q, $rootScope, $routeParams){
		var mailChimpBase = 'https://us13.api.mailchimp.com/3.0//lists/52506a60af/members';
		const mailChimpKey = '941f162269f37a2b384b5e4e273b88b6-us13';
		
		var Api= {};
		
        
        Api.sendEmail = function(emailObject){
	        var deferred = $q.defer();
	        $http({
		        method : 'POST',
		        user : 'anystring ' + mailChimpKey,
		        url : mailChimpBase,
		        data: $.param(emailObject),
		        headers : {
			       "Accept": 'application/json'
		        }
	        }).then(function(data){
		        deferred.resolve(data);
	        }, function(error){
		        deferred.reject(error);
	        });
	        return deferred.promise;
        }

        return Api;
	})
	
	
		
	
	
	//curl --request POST \
//--url 'https://us13.api.mailchimp.com/3.0/lists/52506a60af/members' \
//--user 'anystring:941f162269f37a2b384b5e4e273b88b6-us13' \
//--header 'content-type: application/json' \
//--data '{"email_address":"dtawfik37@gmail.com", "status":"subscribed"}' \
//--include