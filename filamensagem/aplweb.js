var http = require("http");
var fs = require("fs");
var log = console.log.bind(console);
const file = "./fila.txt";
var server = http.createServer();

server
  .on("request", function(req, res) {
    if (req.url === "/favicon.ico") {
      res.writeHead(200, { "Content-Type": "image/x-icon" });
      res.end();
      return;
    }

    fs.stat(file, function(err, stats) {
      if (err) {
        log("Não há mensagens para você - arquivo de fila não existe !!");
        res.write("Não há mensagens na fila ....");
        res.end();
        return;
      }

      if (stats.isFile()) {
        fs.readFile(file, "utf8", function(err, data) {
          if (err) {
            log("Não consigo ler o arquivo de fila de mensagens !!");
            res.write(
              "Erro na leitura do servidor de banco de dados (kkk) !!!!"
            );
            res.end();
            return;
          }
          res.write("Mensagens: " + "\n");
          res.write(data);
          res.write(
            "-------------------------- fim -----------------------------------"
          );
          res.end();
        });
      }
    });
  })
  .listen(8111);
