var mysql = require("mysql");
var pool = mysql.createPool({
  host: "remotemysql.com",
  user: "Ybi1BVrtgr",
  password: "by9clVziwX",
  database: "Ybi1BVrtgr"
});

var http = require("http");

var options = {
  host: "www.google.com",
  port: 80,
  method: "POST"
};
var url = "www.google.com"; //url
console.log("URL:" + url);
var req = http.request(options, function(res) {
  console.log("STATUS: " + res.statusCode); //response_code

  res.setEncoding("utf8");
  res.on("data", function(chunk) {});
});

req.on("error", function(e) {
  console.log("problem with request: " + e.message);
});
req.end();

var date = new Date(); //date
console.log("Date:" + date);

var response_time = new Date() - date; //response_time
console.log("res_time:" + response_time);

var ip_address = "192.168.1.18";
console.log("ip: " + ip_address);

//db_connection
pool.getConnection(function(err, connection) {
  console.log(err);
  let sql =
    "INSERT INTO `url_metrics` (`url`, `response_code`, `response_time`, `ipadress`, `date`) VALUES (?, ?, ?, ?, ?);";

  url = "NULL";
  req = "NULL";
  response_time = "NULL";
  ip_address = "NULL";
  date = "NULL";
  let post = [url, req, response_time, ip_address, date];
  // let post = {
  //   url: url,
  //   req: req,
  //   response_time: response_time,
  //   ip_address: ip_address,
  //   date: date
  // };

  connection.query(sql, post, function(error, results, feild) {
    console.log(results);
    connection.release();
    if (error) throw error;
  });
});
