var myApp= angular.module('myApp',[]);
//run方法:在所有模块加载完之后,就只会运行一次
//angurlar内置提供$templateCache,装一个共同的模板,供不同的指令使用
//通过$templateCache.push('页面名字','页面代码')缓存页面;
//$templateCache.get('页面名字')获取页面
myApp.run(function($templateCache){
	$templateCache.put('hello.html','<div>hello everyone!------<div ng-transclude></div></div>')
})


myApp.directive('hello',function($templateCache){
	return {
		restrict:'E',
		template:$templateCache.get('hello.html'),
		transclude:true
	}
});

myApp.directive('what',function($templateCache){
	return {
		restrict:'E',
		template:$templateCache.get('hello.html'),
		replace:true
	}
});