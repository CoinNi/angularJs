var myApp =angular.module('myApp',[]);
myApp.directive('surperman',function(){
	return {
		scope:{},
		restrict:'AE',
		controller:function($scope){
			$scope.power = [];
			this.addStrength = function(){
				$scope.power.push('strength');
			};
			this.addSpeed = function(){
				$scope.power.push('speed');
			};
			this.addLigth = function(){
				$scope.power.push('light');
			};
		},
		link:function(scope,element,attrs){
			element.addClass('btn btn-primary');
			element.bind('mouseenter',function(){
				console.log(scope.power);
			})
		}
	}
});

myApp.directive('strength',function(){
	return {
		require:'surperman',//依赖这个指令
		//angular.js在处理的时候,会自动注射surperman的controller到link函数的perpermanCtrl来

		link:function(scope,element,attrs,surpermanCtrl){
			surpermanCtrl.addStrength();
		}
	}
});

myApp.directive('ligth',function(){
	return {
		require:'surperman',
		link:function(scope,element,attrs,surpermanCtrl){
			surpermanCtrl.addLigth();
		}
	}
});

myApp.directive('speed',function(){
	return {
		require:'surperman',
		link:function(scope,element,attrs,surpermanCtrl){
			surpermanCtrl.addSpeed();
		}
	}
});