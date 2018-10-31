async = require("async");
fs = require("fs");
url = "./data/";

async.waterfall(
  [
    function(callback) {
      fs.readdir("./", callback);
    },

    function(fileNames, callback) {
      async.map(fileNames, fs.stat, function(err, stats) {
        if (err) return callback(err);
        return callback(null, fileNames, stats);
      });
    },

    function(fileNames, stats, callback) {
      var texto = "";
      async.forEachOf(
        fileNames,
        function(aFileName, index, cb) {
          if (stats[index].mode !== 16822) {
            fs.readFile(aFileName, "utf8", function(err, data) {
              if (err) cb(err);
              texto = texto + data;
              return cb();
            });
          }
        },
        function(err) {
          if (err) callback(err);
          return callback(null, fileNames, stats, texto);
        }
      );
    }
  ],
  function(err, fileNames, stats, contents) {
    if (err) {
      console.error(err);
    } else {
      console.log(fileNames);
      console.log(stats);
      console.log(contents);
    }
  }
);
