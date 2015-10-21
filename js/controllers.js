/**
 * Created by martynuk on 20.10.15.
 */

'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', ['ngRoute']);

phonecatApp.config(['$routeProvider', '$locationProvider', function($routeProvide, $locationProvider){
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
	$routeProvide
		.when('/', {
			templateUrl: 'template/home.html',
			controller: 'PhoneListCtrl'
		})
		.when('/about', {
			templateUrl: 'template/about.html',
			controller: 'AboutCtrl'
		})
		.when('/contact', {
			templateUrl: 'template/contact.html',
			controller: 'ContactCtrl'
		})
		.when('/phones/:phoneId', {
			templateUrl: 'template/phone-detail.html',
			controller: 'PhoneDetailCtrl'
		})
		.otherwise ({
			redirectTo: '/'
		});
}]);

phonecatApp.controller('PhoneListCtrl',['$scope','$http', '$location', function($scope, $http, $location) {

	$http.get('phones/phones.json').success(function(data, status, headers, config) {
		$scope.phones = data;
	});

}]);

//About Controller
phonecatApp.controller('AboutCtrl',['$scope','$http', '$location', function($scope, $http, $location) {

}]);

//Contact Controller
phonecatApp.controller('ContactCtrl',['$scope','$http', '$location', function($scope, $http, $location) {

}]);
//Phone-detail Controller
phonecatApp.controller('PhoneDetailCtrl',['$scope','$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
	$scope.phoneId = $routeParams.phoneId;
}]);