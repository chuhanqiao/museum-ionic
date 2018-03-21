angular.module('museumDetailApp',[])
.controller('MuseumDetailController',['$scope','$state','$http','$stateParams',function($scope,$state,$http,$stateParams){
    $scope.data={
        data:{}
    };
$http({
    url:"http://localhost:3000/museum/AB/"+$stateParams.id,
    method:"post"
}).then(function success(data){
    $scope.data.data = data.data[0];
},function error(e){
    console.log("error data");
    console.log(e);
})
}])