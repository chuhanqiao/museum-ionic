angular.module('mineApp',[])
.controller('MineController',['$state','$http','$scope','$stateParams',function($state,$http,$scope,$stateParams){
    $scope.data={
        info:{},
        nav:["历史教室","活动报名","表扬台","志愿者天地"],
        toExit:function () {
            $state.go('login');
        }
};
    var $j = jQuery.noConflict();
    var name= $stateParams.name;
    $j.ajax({
        url:"http://localhost:3000/mine",
        method:"post",
        data:{
            name:name
        },
        success:function(data){
            $scope.data.info = data[0];
        }
    })//ajax
}])