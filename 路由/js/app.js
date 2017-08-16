var luYouApp = angular.module('luYouApp',[
    'ngRoute', 'ngAnimate', 'luYouCtrls', 'luYouFilters',
    'luYouServices', 'luYouDirectives'
]);

luYouApp.config(function($routeProvider) {
    $routeProvider.when('/hello', {
        templateUrl: 'tpls/hello.html',
        controller: 'helloctrl'
    }).when('/test1',{
    	templateUrl:'tpls/test1.html',
    	controller:'test1ctrl'
    }).when('/test2',{
    	templateUrl:'tpls/test2.html',
    	controller:'test2ctrl'
    }).otherwise({
        redirectTo: '/hello'
    })
});