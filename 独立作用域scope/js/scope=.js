var myApp = angular.module('myApp',[]);

myApp.controller('myAppController',['$scope',
		function($scope){
			$scope.second = "hello2";
		}
	]);

myApp.directive('hello',
		function(){
			return {
				scope:{
					test:"="
				},
				restrict:"AE",
				template:"<input type='text' ng-model='test'/>"
			}
		}
	);