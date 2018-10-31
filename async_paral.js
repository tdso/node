async = require("async");
fs = require("fs");
var files = ["./buffer_teste.js", "./a1.js", "./Notas_Node.txt"];

async.parallel(
  {
    data1: function(cb) {
      fs.readFile(files[0], "utf8", function(err, data) {
        return cb(err, data);
      });
    },
    data2: function(cb) {
      fs.readFile(files[1], "utf8", function(err, data) {
        return cb(err, data);
      });
    },
    data3: function(cb) {
      fs.readFile(files[2], "utf8", function(err, data) {
        return cb(err, data);
      });
    }
  },
  function(err, result) {
    if (err) {
      console.error(err.message);
    } else {
      console.log(result.data1);
    }
  }
);
