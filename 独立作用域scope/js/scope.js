var myApp = angular.module('myApp',[]);

myApp.directive('hello',function(){
	return {
		scope:{},
		restrict:'AE',
		template:'<div><input type="text" ng-model="username"/>{{username}}</div>',
		replace:true
	}
});