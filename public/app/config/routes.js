'use strict';

angular.module(ModuleName).config([
	'$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/travels', {
				templateUrl: '/app/views/travels.html',
				controller: 'TravelsController',
				controllerAs: 'travelsManager'
			})
			.when('/users', {
				templateUrl: '/app/views/users.html',
				controller: 'UsersController',
				controllerAs: 'usersManager'
			})
			.when('/login',{
				templateUrl: '/app/views/login.html',
				controller: 'AuthController',
				controllerAs: 'login'
			})
			.when('/signup',{
				templateUrl: '/app/views/signup.html',
				controller: 'SignUpController',
				controllerAs: 'signup'
			})
			.when('/404', {
				templateUrl: 'app/views/404.html',
				controller: 'NotFound',
				controllerAs: 'nf404'
			})
			.when('/', {
				redirectTo: 'travels'
			})
			.otherwise({
				redirectTo: '/404'
			});
	}
]);