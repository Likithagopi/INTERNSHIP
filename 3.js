
var mysql = require('mysql');
var pool = mysql.createPool({
  host: "remotemysql.com",
  user: "Ybi1BVrtgr",
  password: "by9clVziwX",
  database: "Ybi1BVrtgr"
});


var http = require("http");

var options = {
  host: 'www.dsatmcse.com',
  port: 443,
  method: 'POST'
};
var url=options.host;   //url
console.log('URL:' + (url) );
var req = http.request(options, function(res) {
res1=res.statusCode;
  console.log('STATUS: ' +(res1));   //response_code

  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});
req.end();

var date = new Date();    //date
date1=date.toString();
console.log('Date:' +(date1));

 var response_time = new Date() - date;  //response_time
 console.log('res_time:'  +(response_time)); 

var ip_address='192.168.1.18';
 console.log('ip: '  +(ip_address)); 

//db_connection
 pool.getConnection(function(err, connection) {
    
 url2 = url;
req=res1;
res=response_time;
ip=ip_address;
date3=date1
  
  let sql =
      ("INSERT INTO `url_metrics`(`url`, `response_code`, `response_time`, `ipadress`, `date`) VALUES (?,?,?,?,?);");
 let post = [ url2,  req , res, ip, date3];
    
    connection.query(sql, post, function(error, results, feilds) {
      console.log(results);
      connection.release();

  if (error) throw error;
   });
     
    });



  

