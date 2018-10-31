var fs = require("fs");
var async = require("async");
var _dir = "./data/";

var writeStream = fs.createWriteStream("./log.txt", {
  flags: "a",
  encoding: "utf-8",
  mode: 0666
});

async.waterfall(
  [
    function readDir(callback) {
      console.log("iniciou waterfall");
      fs.readdir(_dir, function(err, files) {
        callback(err, files);
      });
    },

    function loopFiles(lista, callback) {
      console.log("loopFiles");
      console.log(lista);
      // for (var i = 0; i < lista.lenght; i++) {
      // callback(null, name[i]);
      // }
      // callback(null, lista[0]);
      /* lista.map(item => {
        return callback(null, item);
      }); */
      lista.forEach(function(name) {
        //console.log("loopFiles param name");
        // console.log(name);
        console.log("passo 1");
        return callback(null, name);
        console.log("passo 2");
      });
    },

    function checkFile(file, callback) {
      console.log("checkFile - param file");
      console.log(file);
      fs.stat(_dir + file, function(err, stats) {
        console.log("erro fs.stat");
        return callback(err, stats, file);
      });
    },

    function readData(stat, file, callback) {
      console.log("readData" + file);
      if (stat.isFile()) {
        console.log("readData");
        fs.readFile(_dir + file, "utf8", function(err, data) {
          console.log("readData - READFILE");
          return callback(err, file, data);
        });
      }
    },

    function modify(file, text, callback) {
      var adjdata = text.replace(/somecompany\.com/g, "Pitucao");
      callback(null, file, adjdata);
    },

    function writeData(file, text, callback) {
      fs.writeFile(_dir + file, text, function(err) {
        return callback(err, file);
      });
    },

    function logChange(file, callback) {
      writeStream.write("changed " + file + "\n", "utf8", function(err) {
        return callback(err);
      });
    }
  ],
  function(err) {
    if (err) {
      console.log("rotina de erro");
      console.error(err.message);
    } else {
      console.log("modified files");
    }
  }
);
