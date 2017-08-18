var myApp = angular.module('myApp',[]);

myApp.controller('myAppController1',['$scope',
		function($scope){
			$scope.loading1 = function(){
				console.log("正在加载1.......");
			}
		}
	]);

myApp.controller('myAppController2',['$scope',
		function($scope){
			$scope.loading2 = function(){
				console.log('正在加载2.........');
			}
		}
	]);

myApp.directive('load',function(){
	return{
		restrict:'AE',
		link:function(scope,element,attrs){
			element.bind('mouseenter',function(){
				scope.$apply(attrs.howtoload);
			});
		}
	}

});