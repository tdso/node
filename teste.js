//os = require("os");
//console.log(os.cpus());

var fs = require("fs");
var Mode = require("stat-mode"); // tem que ser instalado com npm install stat-mode
fs.stat("./hash_senha.js", function(err, stats) {
  if (err) return console.log(err);

  var mode = new Mode(stats);
  console.log(mode.toString());
  console.log("Group execute: " + mode.group.execute);
  console.log("Others write: " + mode.others.write);
  console.log("Owner read: " + mode.owner.read);
});
