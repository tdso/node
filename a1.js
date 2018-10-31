var fs = require("fs");
var async = require("async");
var _dir = "./data/";

async.waterfall(
  [
    function readData(callback) {
      fs.readFile(_dir + "p1.txt", "utf8", function(err, data) {
        console.log("readData - READFILE");
        callback(err, data);
      });
    },
    function modify(text, callback) {
      var adjdata = text.replace(/somecompany\.com/g, "Pitucao");
      callback(null, adjdata);
    },
    function writeData(text, callback) {
      fs.writeFile(_dir + "p1.txt", text, function(err) {
        callback(err, text);
      });
    }
  ],
  function(err, result) {
    if (err) {
      console.log("rotina de erro");
      console.error(err.message);
    } else {
      console.log("modified files");
      console.log(result);
    }
  }
);
