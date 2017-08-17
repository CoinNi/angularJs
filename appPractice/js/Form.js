var UserInfoModule = angular.module('UserInfoModule',[]);

UserInfoModule.controller('userInfoCtrl',['$scope',
		function($scope){
			$scope.userInfo={
				email:"1120236124@qq.com",
				password:"123456789",
				autoLogin:true
			};
			$scope.getFormDate = function(){
				console.log($scope.userInfo);
			};
			$scope.setFormDate = function(){
				$scope.userInfo={
					email:"XXXXXXXXXXXX@qq.com",
					password:"dasd6789",
					autoLogin:false
				};
			};
			$scope.resetFormDate = function(){
				$scope.userInfo={
					email:"1120236124@qq.com",
					password:"123456789",
					autoLogin:true
				};
			}
		}
	]);