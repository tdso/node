var promise = require("bluebird");
var fs = promise.promisifyAll(require("fs"));
var dados = "";

fs.readFileAsync("./apple.txt", "utf8")
  .then(function(data) {
    dados = data.replace(/apple/g, "orange");
    return fs.mkdirSync("./frutas/");
  })
  .then(function() {
    return fs.writeFileAsync("./frutas/frutas.txt", dados);
  })
  .catch(function(error) {
    console.log(error);
  });
