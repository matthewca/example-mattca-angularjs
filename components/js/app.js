//this module is designed to work with the whole applicatione
//need the ngRoute dependency from angular-route.js, otherwise $routeProvider is unknown
var app = angular.module('mattca', ['ngRoute', 'projectServices', 'reviewServices']).config(mattcaRouter);

function mattcaRouter($routeProvider) {
	$routeProvider
	.when('/', {templateUrl: 'partials/home.html', controller: function($scope) {
		$scope.setCurrent('applications');
	}})
	.when('/applications', {templateUrl: 'partials/home.html', controller: function($scope) {
		$scope.setCurrent('applications');
	}})
	.when('/services', {templateUrl: 'partials/services.html', controller: function($scope) {
		$scope.setCurrent('services');
	}});
}