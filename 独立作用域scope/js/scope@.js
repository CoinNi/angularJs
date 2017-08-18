var myApp = angular.module('myApp',[]);

myApp.controller('myAppController',["$scope",
		function($scope){
			$scope.test = "hello";
		}
	]);

myApp.directive('hello',function(){
	return {
		scope:{
			first:'@'
		},
		restrict:"AE",
		template:'<div>{{first}}</div>'
		//,
		// link:function(scope,element,attrs){
		// 	scope.first = attrs.first;
		// }
	}
});