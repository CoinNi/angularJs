var helloAngularApp = angular.module('helloAngularApp',[]);

helloAngularApp.controller('helloAngular',['$scope',function($scope){
	$scope.greeting = {
		text:"hello"
	}
}]);