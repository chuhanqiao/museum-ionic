var http = require('http');
var db  = require('./dbCon');
var url = require('url');
http.createServer(function (req,res) {
    /**
     * 设置请求头，解决跨域
     */
    res.writeHeader(200,{
        'content-type':'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Request-Method':'POST,GET,OPTIONS',
        'Access-Control-Request-Headers':'content-type'});
    /**
     * 解析请求的路径
     */
    var pathname = url.parse(req.url).pathname;
    /**
     *将从数据库中请求到的数据返回给客户端
     */
    if(/(\/reg)|(\/mine)|(\/selid)/.test(pathname)){
        req.on('data',function(data){
            if(/\/reg/.test(pathname)) {
                var data = decodeURIComponent(data).split("&");
                var dataArr = [];
                data.forEach(function (e, i, q) {
                    dataArr.push(e.split("=")[1]);
                });
                var a = "女";
                db.dbCon("insert into tb_userinfo (username,password,sex,address,userPhone) values ('" + dataArr[0] + "','" + dataArr[1] + "','" + a + "','" + dataArr[2] + "','" + dataArr[3] + "')", res);
            }//reg
            else if(/\/mine/.test(pathname)){
                var data = decodeURIComponent(data).split("=")[1];
                db.dbCon("select * from tb_userinfo where username= '"+data+"'",res);
            }//mine
            else if(/\/selid/.test(pathname)){
                var data = decodeURIComponent(data).split("=")[1];
                // console.log(data);
                db.dbCon("select museumID from tb_museuminfo where title = '"+data+"'",res);
            }//selID
        })//req.on(data)
    }
   else {
        if (pathname.match(/ABC\/([0-9]*)/) == null) {
            if (pathname.match(/A\/([0-9]*)/) == null) {
                if (pathname.match(/AB\/([0-9]*)/) == null) {
                    switch (pathname) {
                        case "/pbGeneral":
                            db.dbCon("select * from tb_pbinfo", res);
                            break;
                        case "/home":
                            db.dbCon("select * from tb_pbdisplay", res);
                            break;
                        case "/museum":
                            db.dbCon("select * from tb_newzx", res);
                            break;
                        case "/thingda":
                            db.dbCon("select * from tb_museuminfo", res);
                            break;
                        case "/login":
                            db.dbCon("select * from tb_userinfo", res);
                            break;
                    }
                }
                else {
                    var str = pathname.match(/AB\/([0-9]*)/);
                    db.dbCon("select * from tb_newzx where newzxID=" + str[1], res);
                }
            }
            else {
                var str = pathname.match(/A\/([0-9]*)/);
                db.dbCon("select * from tb_pbdisplay where pbdisplayID=" + str[1], res);
            }
        }
        else {
            var str = pathname.match(/ABC\/([0-9]*)/);
            db.dbCon("select * from tb_museuminfo where museumID=" + str[1], res);
        }
    }

}).listen(3000,function () {
    console.log("HTTP SERVER IS LISTENING AT 3000 PORT");
});
