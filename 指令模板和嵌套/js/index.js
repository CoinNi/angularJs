var myApp= angular.module('myApp',[]);

myApp.directive('hello',function(){
	return {
		restrict:'E',
		template:'<div class="col-md-3">hello,angular<div ng-transclude></div></div>',
		transclude:true
	}
});

myApp.directive('what',function(){
	return {
		restrict:'E',
		template:'<div class="col-md-3">hello,angular<div ng-transclude></div></div>',
		transclude:true
	}
});