var myApp= angular.module('myApp',[]);

myApp.directive('hello',function(){
	return {
		restrict:'E',
		templateUrl:'./tpls/templateUrl.html',
		replace:false
	}
});