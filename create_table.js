var mysql = require("mysql");

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

var createTable =
  "CREATE TABLE user1 (userid INT NOT NULL auto_increment, PRIMARY KEY (userid),username VARCHAR(400) NOT NULL, passwordhash VARCHAR(400) NOT NULL, salt DOUBLE NOT NULL);";

conn.connect();
conn.query("USE nodedb");
conn.query(createTable, function(err) {
  if (err) {
    console.log("erro na criacao");
    console.log(err);
  } else console.log("sucesso");
});
