'use strict';

angular.module('app.grid')
	.service('GridDataService', function($q, $timeout) {

			this.retrieveData = function(columns, rows) {
				var deferred = $q.defer();

				$timeout(function() {
				    deferred.resolve(makeData(columns, rows));
				  }, 0);

				return deferred.promise;
			}

			function makeData(columns, rows) {
				var data = [];
				var i;

				for (i=0; i < rows; i++) {
					data.push(makeDataForColumnSchema(columns));
				}

				console.log(data);

				return data;
			}

			function makeDataForColumnSchema(columns) {
				switch (columns) {
					case 25:
						return {
							"column-1": faker.helpers.createCard()
						};
					case 50:
						return {
							"column-1": faker.account()
						};
					case 100:
						return {
							"column-1": faker.account()
						};
				}
			}
		}
	);
