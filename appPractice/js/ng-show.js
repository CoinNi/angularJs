var MyShowModule = angular.module('MyShowModule',[]);

MyShowModule.controller('MyShowModuleController',['$scope',
		function ($scope) {
			$scope.menuState = {show:false};
			$scope.toggleMenu = function(){
				$scope.menuState.show = !$scope.menuState.show;
			};
			$scope.stun = function(){
				alert("stun()");
			};
			$scope.disintergrate = function(){
				alert("disintergrate()");
			};
			$scope.erase = function(){
				alert("erase()");
			};
		}
	]);