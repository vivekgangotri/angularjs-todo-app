(function() {
	'use strict';

	angular
	.module('todoApp', [
		'ui.router',
		'todoApp.todoList'
	])
	.config(function($stateProvider) {
		$stateProvider
			.state({
				name: 'todos-list',
				url: '/todos/list',
				templateUrl: 'app/views/todos/list.html'
			});
	})
	.controller('MainController', ['$scope', '$rootScope', function ($scope, $rootScope) {

		var scope = this;
	    // Let's namespace the user details
	    // Also great for DOM visual aids too
	    scope.user = {};
	    scope.user.details = {
	      "username": "Todd Motto",
	      "id": "89101112"
	    };

	}]);
})();