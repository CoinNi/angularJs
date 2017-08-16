var controllers = angular.module('luYouCtrls',[]);

controllers.controller('helloctrl',['$scope',
    function($scope){
        $scope.greeting = {
            text : "hello"
        }
}]);

controllers.controller('test1ctrl',['$scope',
    function($scope){
        $scope.books = [
            {tiltle:"<<西游记>>",author:"<<吴承恩>>"},
            {tiltle:"<<红楼梦>>",author:"<<曹雪芹>>"},
            {tiltle:"<<水浒传>>",author:"<<???>>"}
        ]
    }
]);

controllers.controller('test2ctrl',['$scope',
    function($scope){
        $scope.classmate = [
            {name:"曹明",age:"12",sex:"男孩"},
            {name:"撒撒",age:"10",sex:"男孩"},
            {name:"刚好",age:"11",sex:"女孩"}
        ];
    }
]);