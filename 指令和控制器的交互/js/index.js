var myApp = angular.module('myApp',[]);

myApp.controller('myAppController',['$scope',
		function($scope){
			$scope.loadDate = function(){
				console.log("数据加载中.......");
			}
		}
	]);

myApp.directive('loading',function(){
	return {
		restrict:'AE',
		template:'',
		link:function(scope,element,attrs){
			element.bind('mouseenter',function(){
				// scope.loadDate();
				scope.$apply('loadDate()');
			});
		}
	}
});