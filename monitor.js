var express = require("express");
var body_parser = require("body-parser");
var mysql = require("mysql");

let app = express();

app.listen(3000);

var mysql = require("mysql");
var pool = mysql.createPool({
  host: "remotemysql.com",
  user: "Ybi1BVrtgr",
  password: "by9clVziwX",
  database: "Ybi1BVrtgr"
});

app.get("/", function(req, res) {
  var start = new Date();

  var url = req.protocol + "://" + req.get("host") + req.originalUrl;
  var response_code = "200";
  var dns_time = start;
  var ipadress = req.ip;
  var date = new Date().getHours();
  var error = "NULL";
  var response_time = new Date() - start;
  pool.getConnection(function(err, connection) {
    //Time Start for calculating response time

    let sql =
      "INSERT INTO `url_metrics` (`url`, `response_code`, `response_time`, `dns_time`, `ipadress`, `date`, `error`) VALUES (?,?,?,?,?,?,?);";
    let post = [
      url,
      response_code,
      response_time,
      dns_time,
      ipadress,
      date,
      error
    ];
    connection.query(sql, post, function(error, results, fields) {
      console.log(results);
      connection.release();

      if (error) throw error;
    });
  });
  res.send(url + "This url is added to dataBase");
});
