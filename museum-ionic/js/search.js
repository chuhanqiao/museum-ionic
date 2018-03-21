angular.module("searchApp",[])
.controller("SearchController",['$scope','$http','$state','$stateParams',function($scope,$http,$state,$stateParams){
    var $j = jQuery.noConflict();
    $j.ajax({
        url:"http://localhost:3000/thingda",
        method:"post",
        success:function(data){
            var arr=[];
            $j(document).keydown(function(event){
                if(event.keyCode==13){
                    $j("#show>div").empty();
                    arr=[];
                        var content =  $j("#content").val();
                        for(var i=0;i<data.length;i++){
                            if(data[i].title.indexOf(content) !== -1 ){
                                arr.push(data[i]);
                                str =  "<div class='item'>"+data[i].title+"</div>";
                                $j("#show>div").append(str);
                            }
                        }//for
                    $j("#show>div>div").on("click",function(){
                        var text = $j(this).text();
                        $j.ajax({
                            url:"http://localhost:3000/selid",
                            method:"post",
                            data:{
                                title:text
                            },
                            success:function(data){
                                // console.log(data);
                                var data = data[0].museumID;
                                $state.go('tab.thingDaDetail',{id:data});
                            },
                            error:function (e) {
                                console.log("error data");
                                console.log(e);
                            }
                        })

                    })
                }//if
            });
        }//success
    });//ajax


}])