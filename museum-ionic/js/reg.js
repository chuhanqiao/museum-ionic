angular.module('regApp',[])
    .controller('RegController',['$scope','$http','$state','$stateParams',function($scope,$http,$state,$stateParams){
    var $j = jQuery.noConflict();
    $scope.mine = {
        toLogin:function () {
            $state.go('login');
        }
    };
    document.getElementById("reg").addEventListener("click",function(){
        var usernameVal = $j("#username").val();
        var passwordVal = $j("#password").val();
        var addressVal = $j("#address").val();
        var userPhoneVal = $j("#userPhone").val();
        $j.ajax({
            url:"http://localhost:3000/reg",
            data:{
            username:usernameVal,
                password:passwordVal,
                address:addressVal,
                userPhone:userPhoneVal
            },
            method:"post",
            success:function(data){
                $state.go('login',{},{reload:true});
            },
            error:function(e){
                console.log("error data");
                console.log(e);
            }
        })//ajax
    })//click
    }]);