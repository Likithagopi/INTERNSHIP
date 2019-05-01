var express = require('express');
var body_parser = require('body-parser');
var mysql      = require('mysql');

let app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)

var mysql = require('mysql');
var pool  = mysql.createPool({
    host     : 'remotemysql.com',
    user     : 'Ybi1BVrtgr',
    password : 'by9clVziwX',
    database : 'Ybi1BVrtgr'
  });

pool.getConnection(function(err, connection) {
  // Use the connection
        //Time Start for calculating response time
        var start = new Date();

        var url = 'URL '//://' + req.get('host') + req.originalUrl;
        var response_code = 'RES_CODE'
        var dns_time	='DNS_T'
        var ipadress	= 'ip'
        var date	= new Date().getHours();
        var error="ERR"
        var response_time	=new Date() - start
  let sql = 'INSERT INTO `url_metrics` (`url`, `response_code`, `response_time`, `dns_time`, `ipadress`, `date`, `error`) VALUES (?,?,?,?,?,?,?);';
//   let post  = {"url":url, "response_code":response_code, "dns_time":dns_time, "ipadress":ipadress, "date":date, "error":error, "response_time":response_time};
let post  = [url, response_code,response_time ,dns_time, ipadress, date, error];
  connection.query(sql,post, function (error, results, fields) {
    // And done with the connection.
    console.log(results)
    connection.release();

    // Handle error after the release.
    if (error) throw error;

    // Don't use the connection here, it has been returned to the pool.
  });
});
