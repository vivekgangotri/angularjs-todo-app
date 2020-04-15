(function() {
	'use strict';
	
	angular
	.module('todoApp.todoList', [])
	.controller('TodoListController', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {

		var scope = this;
		scope.todos = [];

		$rootScope.appName = "Todos App" ;

		// Simple GET request example:
		$http({
			method: 'GET',
			url: 'https://jsonplaceholder.typicode.com/todos'
		}).then(function successCallback(response) {
			scope.todos = response.data;
		}, function errorCallback(response) {
			console.log(response)
		});

	}]);
})();