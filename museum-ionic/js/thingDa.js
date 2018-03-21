angular.module('thingDaApp',[])
    .controller('ThingDaController',['$scope','$http','$state','$stateParams',function($scope,$http,$state,$stateParams){
        $scope.mine={
            goPath:function (str) {
                $state.go('tab.thingDaDetail',{id:str});
            }
        };
        $scope.data= {
            title:"文物档案",
            nav:["最新资讯","文物档案"],
            headNav:{},
            data:[],
            toPath:function(str){
                if(str=="最新资讯"){
                    $state.go('tab.museum');
                }
                else if(str=="文物档案"){
                    $state.go('tab.thingDa');
                }
            },
            search:function(){
                $state.go('tab.search');
            }
        };
        $http({
            url:"http://localhost:3000/thingda",
            method:"post"
        }).then(function success(data){
            $scope.data.headNav=data.data[0];
            var arr = data.data;
            arr.shift();
            $scope.data.data=arr;
        },function error(e){
            console.log("error data");
            console.log(e);
        })


    }])