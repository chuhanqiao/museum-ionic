angular.module('homeDetailApp',[])
.controller('HomeDetailController',['$scope','$state','$http','$stateParams',function($scope,$state,$http,$stateParams){
    $scope.data={
        data:{}
    }

    $http({
        url:"http://localhost:3000/home/A/"+$stateParams.id,
        method:"post"
    }).then(function success(data){
        $scope.data.data = data.data[0];
    },function error(e){
        console.log("error data");
        console.log(e);
    })



}])