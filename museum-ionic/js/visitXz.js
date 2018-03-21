angular.module('visitXzApp',[])
    .controller('VisitXzController',['$scope','$http','$state','$stateParams',function($scope,$http,$state,$stateParams){
        $scope.data={
            nav:["平博概况","基本陈列","参观攻略","参观须知"],
            data:{},
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
        url:"http://localhost:3000/pbGeneral",
        method:"get"
    }).then(function success(data){
        $scope.data.data=data.data[2];

    },function error(e){
        console.log("error data");
        console.log(e);
    })
    }])