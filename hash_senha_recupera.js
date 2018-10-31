var mysql = require("mysql");
var crypto = require("crypto");
var hash = "";
var values_var = {};
values_var.username = process.argv[2];
var password = process.argv[3];
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect();

con.query("use nodedb");

con.query(
  "select passwordhash, salt from user1 where username = ?",
  values_var.username,
  function(err, result) {
    if (err) return console.error(err);

    hash = crypto
      .createHash("sha512")
      .update(result[0].salt + password, "utf8")
      .digest("hex");

    if (hash === result[0].passwordhash) {
      console.log("cool......password OK");
    } else {
      console.log("errado !!!!!!!!!!");
    }
    con.end();
  }
);
