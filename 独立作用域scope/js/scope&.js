var myApp = angular.module('myApp',[]);

myApp.controller('myAppController',['$scope',
		function($scope){
			$scope.say = function(name){
				alert(name);
			}
		}
	]);

myApp.directive('greeting',function(){
	return {
		scope:{
			greet:"&"
		},
		restrict:'AE',
		template:'<input type="text" ng-model="username" />'+
		'<br><button class="btn btn-default" ng-click="greet({name:username})">greeting</button>'
	}
});