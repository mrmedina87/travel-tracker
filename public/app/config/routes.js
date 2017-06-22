angular.module(ModuleName).config([
	'$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/travels', {
				templateUrl: '/app/views/travels.html',
				controller: 'Travels',
				controllerAs: 'travelsManager'
			})
			.when('/users', {
				templateUrl: '/app/views/users.html',
				controller: 'Users',
				controllerAs: 'usersManager'
			})
			.when('/login',{
				templateUrl: '/app/views/login.html',
				controller: 'Login',
				controllerAs: 'login'
			})
			.when('/signup',{
				templateUrl: '/app/views/signup.html',
				controller: 'SignUp',
				controllerAs: 'signup'
			})
			.when('/404', {
				templateUrl: 'app/views/notFound.html',
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