angular.module('thingDaDetailApp',[])
    .controller('ThingDaDetailController',['$scope','$state','$http','$stateParams','$sce',function($scope,$state,$http,$stateParams,$sce){
        $scope.data={
            data:{},
            url:""
        };
        $http({
            url:"http://localhost:3000/museum/ABC/"+$stateParams.id,
            method:"post"
        }).then(function success(data){
            $scope.data.data = data.data[0];
            $scope.data.url = $sce.trustAs($sce.RESOURCE_URL,data.data[0].audioUrl);
        },function error(e){
            console.log("error data");
            console.log(e);
        })
    }])