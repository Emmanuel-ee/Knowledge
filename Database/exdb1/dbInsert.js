var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  port: 3306,
  password: "root1234",
  database: "sample",
});

con.connect(function (err) {

  if (err) throw err;
    console.log("Connected!");

  let sql = "insert into emp(id,name,age) values (3,'Barack Obama',55)"

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

});

