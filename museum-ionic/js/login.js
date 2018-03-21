angular.module('loginApp',[])
.controller('LoginController',['$scope','$http','$state','$stateParams',function($scope,$http,$state,$stateParams){
    $scope.mine ={
        toReg:function () {
            $state.go('reg',{},{reload:true});
        }
    };
    document.getElementById("login").addEventListener("click",function(){
        $http({
            url:"http://localhost:3000/login",
            method:"post"
        }).then(function success(data){
            var usernameDiv = document.getElementById('username').value;
            var passwordDiv = document.getElementById('password').value;
            var data=data.data;
            for(var i=0;i<data.length;i++){
                if((data[i].username==usernameDiv)&&(data[i].password==passwordDiv)){
                    $state.go('tab.mine',{name:data[i].username});
                }
            }
        },function error(e){
            console.log("error data");
            console.log(e);
        })
    })//click函数
}])