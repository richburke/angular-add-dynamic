'use strict';

angular.module('app.grid')
	.controller('GridCtrl', ['$scope', 'GridLayoutService', 'GridDataService', 
		function($scope, GridLayoutService, GridDataService) {

			$scope.grids = [];

			$scope.$on('add-grid', function(evnt, data) {
				var columns = parseInt(data.columns);
				$scope.grids.push(createGrid(columns));
			});

			function createGrid(columns, rows) {
				var grid_id, grid_name, delegate_data;

				rows = 40;

				grid_id = 'grid' + ($scope.grids.length + 1);
				grid_name = 'Grid ' + ($scope.grids.length + 1);

				delegate_data = [];

				GridLayoutService.createLayout();
				GridDataService.retrieveData(columns, rows).then(function(result) {
					console.log(result);
					console.dir(getGrid(grid_id).data);
					getGrid(grid_id).data = result;
				});

				return {
					id: grid_id,
					name: grid_name,
					data: delegate_data,
					columns: columns,
					rows: rows
				};
			}

			function getGrid(id) {
				return _.find($scope.grids, function(grid) {
  				return grid.id == id;
				});
			}
		}]
	);
