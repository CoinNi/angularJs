var mycssmodule = angular.module('MyCssModule',[]);

mycssmodule.controller('Cssctrl',['$scope',
	function ($scope) {
		$scope.color = "red";
		$scope.setGreen = function(){
			$scope.color = "green";
		}
	}])