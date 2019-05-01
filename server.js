var express = require('express');
var body_parser = require('body-parser');
var mysql      = require('mysql');

//express 
var app =  express();
app.listen(8080,function(){
    console.log('Server started');
})
app.all("/*", function(req, res, next) {
    // we need this to work properly // do not delete this
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "POST, GET");
    next();
  });

//express module config
// app.use(body_parser.json());

//Database config 
var connection = mysql.createConnection({
    host     : 'remotemysql.com',
    user     : 'Ybi1BVrtgr',
    password : 'by9clVziwX',
    database : 'Ybi1BVrtgr'
  });

  connection.on('error', function(err) {
    console.log(err);
});
//Database connection
  connection.connect();

// 




//Parsing the get request
  app.get('/',function(req,res){ 
      //Time Start for calculating response time
      var start = new Date();

    var url = req.protocol + '://' + req.get('host') + req.originalUrl;
    var response_code = ""
    var dns_time	=""
    var ipadress	= req.ip
    var date	= new Date().getHours();
    var error=""
    var response_time	=new Date() - start

    //add these data to database
    
    let sql = 'INSERT INTO `url_metrics` (`url`, `response_code`, `response_time`, `dns_time`, `ipadress`, `date`, `error`) VALUES (?, ?, ?, ?, ?, ?, ?);';
 
// execute the insert statment
var post  = {"url":url, "response_code":response_code, "dns_time":dns_time, "ipadress":ipadress, "date":date, "error":error, "response_time":response_time};
connection.query(sql,post);

    
    
  console.log(post);
  


    res.send(url + "This url is added to dataBase");
});




