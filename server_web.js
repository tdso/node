/*
para testar rode esse arquivo: node server_web e no navegador: http://localhost:8124/public.html
*/
var http = require("http");
var fs = require("fs");
var base = "./home/examples/";
const TYPEHEADER = "Content-Type";
const HEADER = "text/html";

http
  .createServer(function(req, res) {
    var path = base + req.url;
    console.log("path = " + path);

    fs.stat(path, function(err, stat) {
      if (err) {
        console.log(err);
        res.writeHead(404);
        res.write("Recurso nao encontrado");
        res.end();
      } else {
        res.setHeader(TYPEHEADER, HEADER);
        // cria um fluxo de leitura e redireciona para o response - ideal para arquivos grandes
        var file = fs.createReadStream(path);

        file.on("open", function() {
          res.statusCode = 200;
          file.pipe(res);
        });

        file.on("error", function(err) {
          console.log(err);
          res.writeHead(403);
          res.write("problema ao acessar o arquivo - permissions ??");
          res.end();
        });
      }
    });
  })
  .listen(8124);

console.log("server running 8124 port");
