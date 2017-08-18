var uiRouterModule = angular.module('uiRouterModule',['ui.router']);

uiRouterModule.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/index');
	$stateProvider.state('/index',{
		url:'/index',
		views:{
			"":{
				temlpateUrl:"tpls/index.html"
			},
			"topbar@index":{
				temlpateUrl:'tpls/topbar.html'
			},
			"main@index":{
				temlpateUrl:"tpls/home.html"
			}
		}
	})
});