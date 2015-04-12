'use strict';

angular.module('app.ctrl')
	.controller('CtrlCtrl', ['$scope', '$rootScope',
		function($scope, $rootScope) {

			$scope.columns = 25;

			$scope.addGrid = function() {
				console.log($scope.columns);
				$rootScope.$broadcast('add-grid', {"columns": $scope.columns});
			}
		}]
	);
