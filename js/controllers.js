/**
 * Created by martynuk on 20.10.15.
 */

'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl',['$scope','$http', function($scope, $http) {

	$http.get('phones/phones.json').success(function(data) {
		$scope.phones = data;
	});

}]);
//status, headers, config

