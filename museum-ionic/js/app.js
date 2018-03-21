angular.module('myApp',['ionic','homeApp','mineApp','museumApp','pbGeneralApp','visitGlApp','visitXzApp','thingDaApp','homeDetailApp','museumDetailApp','thingDaDetailApp','loginApp','regApp','searchApp'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $stateProvider.state('tab',{
            url:'/tab',
            templateUrl:'template/tab.html',
            abstract:true
        })
        /**
         * home界面路由设置（了解平博）
         * 基本陈列
         */
        .state('tab.home',{
            url:'/home',
            views:{
                'tab-home':{
                    templateUrl:'template/home.html',
                    controller:'HomeController'
                }
            }
        })
        /**
         * 平博概况
         */
        .state('tab.pbGeneral',{
            url:'/pbGeneral',
            views:{
                'tab-home':{
                    templateUrl:'template/pbGeneral.html',
                    controller:'PbGeneralController'
                }
            }
        })
        /**
         * 参观攻略
         */
        .state('tab.visitGl',{
            url:'/visitGl',
            views:{
                'tab-home':{
                    templateUrl:'template/visitGl.html',
                    controller:'VisitGlController'
                }
            }
        })
        .state('tab.homeDetail',{
            url:'/homeDetail',
            params:{id:""},
            views:{
                'tab-home':{
                    templateUrl:'template/homeDetail.html',
                    controller:"HomeDetailController"
                }
            }
        })
        /**
         * 参观须知
         */
        .state('tab.visitXz',{
            url:'/visitXz',
            views:{
                'tab-home':{
                    templateUrl:'template/visitXz.html',
                    controller:'VisitXzController'
                }
            }
        })
        /**
         * museum路由界面（走进平博）
         */
        .state('tab.museum',{
            url:'/museum',
            views:{
                'tab-museum':{
                    templateUrl:'template/museum.html',
                    controller:'MuseumController'
                }
            }
        })
        .state('tab.museumDetail',{
            url:'/museumDetail',
            params:{id:""},
            views:{
                'tab-museum':{
                    templateUrl:'template/museumDetail.html',
                    controller:"MuseumDetailController"
                }
            }
        })
        .state('tab.thingDa',{
            url:'/thingDa',
            views:{
                'tab-museum':{
                    templateUrl:'template/thingDa.html',
                    controller:'ThingDaController'
                }
            }
        })
        .state('tab.search',{
            url:'/search',
            views:{
                'tab-museum':{
                    templateUrl:'template/search.html',
                    controller:"SearchController"
                }
            }
        })
        .state('tab.thingDaDetail',{
            url:'/thingDaDetail',
            params:{id:""},
            views:{
                'tab-museum':{
                    templateUrl:'template/thingDaDetail.html',
                    controller:"ThingDaDetailController"
                }
            }
        })
        /**
         * mine界面路由设置（我与平博）
         */
        .state('tab.mine',{
            url:'/mine',
            params:{name:""},
            views:{
                'tab-mine':{
                    templateUrl:'template/mine.html',
                    controller:'MineController'
                }
            }
        })
        /**
         * 登录注册路由设置
         */
        .state('login',{
            url:'/login',
            templateUrl:'template/login.html',
            controller:'LoginController'
        })
        .state('reg',{
            url:'/reg',
            templateUrl:'template/reg.html',
            controller:'RegController'
        });

    $urlRouterProvider.otherwise('/login');
}])
    .directive('hideTabs', function($rootScope) {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) {
            scope.$on('$ionicView.beforeEnter', function() {
                scope.$watch(attributes.hideTabs, function(value){
                    $rootScope.hideTabs = value;
                });
            });
            scope.$on('$ionicView.beforeLeave', function() {
                $rootScope.hideTabs = false;
            });
        }
    };
});
