'use strict';

/**
 * @ngdoc function
 * @name radiologyLabsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the radiologyLabsApp
 */
angular.module('radiologyLabsApp')
  .controller('MainCtrl', ['$scope', '$window', '$document', '$routeParams', '$location', 'Api', function ($scope, $window, $document, $routeParams, $location, Api) {
		
	$scope.beta = {
		open : false,
		email : null,
		first : null,
		last : null,
		page : 'email',
	}
	
	
	$scope.emailSubmit = 'Submit';
	
	$scope.submitEmail = function(){
		if ($scope.beta.email == null || $scope.beta.first == null || $scope.beta.last == null){
			console.log($scope.beta.email);
			console.log($scope.beta.first);
			console.log($scope.beta.last);
			
		}
		console.log('hello');
		$scope.beta.page = 'confirm';
		
	}
	$scope.closeModal = function(){
		$scope.beta.open = false;
	}
		
    
  }]);
