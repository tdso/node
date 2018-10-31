var chokidar = require("chokidar"); // npm i chokidar
var watcher = chokidar.watch("./data", {
  ignored: /[\/\\]\./,
  persistent: true
});

var log = console.log.bind(console);

watcher
  .on("add", function(path) {
    log("File", path, "adicionado");
  })
  .on("unlink", function(path) {
    log("File", path, "removido");
  })
  .on("addDir", function(path) {
    log("Diretorio", path, "adicionado");
  })
  .on("inlinkDir", function(path) {
    log("Diretorio", path, "removido");
  })
  .on("error", function(error) {
    log("Error aconteceu", error);
  })
  .on("ready", function() {
    log("Scan complete");
  })
  .on("raw", function(event, path, details) {
    log("Event Path Details:", event, path, details);
  });

watcher.on("change", function(path, stats) {
  if (stats) log("File", path, "changed size to", stats.size);
});
