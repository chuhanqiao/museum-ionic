var mysql = require('mysql');
exports.dbCon = function (sql,res) {
    var connection = mysql.createConnection({
        host:'localhost',
        port:3306,
        database:'db_museum',
        user:'root',
        password:'root'
    });
    var str;
    connection.connect(function (err) {
        if(err){
            console.log("连接失败");
        }
        else{
            console.log("连接成功");
        }
    });
    /**
     * 数据库表操作
     */
    connection.query(sql,res,function (err,rows) {
        if(err){
            console.log(err);
        }
        str = JSON.stringify(rows);
        res.end(str);
    });
    /**
     * 关闭数据库连接
     */
connection.end(function (err) {
    if(err){
        return;
    }else{
        console.log("连接关闭");
    }
});
}
