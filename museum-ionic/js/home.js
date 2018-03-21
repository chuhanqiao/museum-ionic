angular.module('homeApp',[])
.controller('HomeController',['$scope','$http','$state','$stateParams',function($scope,$http,$state,$stateParams){
    $scope.mine={
        goPath:function (str) {
            $state.go('tab.homeDetail',{id:str});
        }
    };
    $scope.data={
        nav:["平博概况","基本陈列","参观攻略","参观须知"],
        headNav:{},
        data:[],
        toPath: function (str) {
            if(str=="平博概况"){
                $state.go('tab.pbGeneral');
            }
            else if(str=="基本陈列"){
                $state.go('tab.home');
            }
            else if(str=="参观攻略"){
                $state.go('tab.visitGl');
            }
            else if(str=="参观须知"){
                $state.go('tab.visitXz');
            }
        }
    };
    $http({
        url:"http://localhost:3000/home",
        method:"post"
    }).then(function success(data){
        $scope.data.headNav = data.data[0];
        /**
         * 删除数组中的第一个元素
         */
        var arr = data.data;
        arr.shift();
        $scope.data.data = arr;
    },function error(e){
        console.log("error data");
        console.log(e);
    })
}])