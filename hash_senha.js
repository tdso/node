var mysql = require("mysql");
var crypto = require("crypto");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect();

con.query("use nodedb");

var values_var = {};
values_var.username = process.argv[2];
var password = process.argv[3];
values_var.salt = Math.round(Date.now() * Math.random()) + "";

values_var.passwordhash = crypto
  .createHash("sha512")
  .update(values_var.salt + password, "utf8")
  .digest("hex");

con.query("insert into user1 set ?", values_var, function(err, result) {
  if (err) console.log(err);
  else {
    console.log("incluido");
    con.end();
  }
});
