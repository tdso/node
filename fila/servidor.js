var net = require("net");
const PORT = 8124;
var conexoes = [];

var server = net
  .createServer(con => {
    console.log("server conectado");
    conexoes.push(con);

    con.on("data", data => {
      console.log(
        "server = " + data + "from " + con.remoteAddress + " " + con.remotePort
      );
      // inves de repetir quero persistir no bd nosql
      // con.write("Repeat >>>> " + data);
      conexoes.forEach(conexao => {
        if (conexao.remotePort != con.remotePort)
          conexao.write("id yet no defined > " + data);
      });
    });

    con.on("close", () => {
      console.log(
        "server = client closed connection - removendo do pool !!!!!"
      );
      var pos = conexoes.indexOf(con);
      if (pos >= 0) {
        conexoes.splice(pos, 1);
      }
    });
    con.on("error", erro => {
      console.log("doidao");
      if (erro.code == "ECONNRESET") {
        var pos = conexoes.indexOf(con);
        if (pos >= 0) {
          conexoes.splice(pos, 1);
        }
      }
    });
  })
  .listen(PORT);

server.on("listening", () => console.log("server listening port 8124"));

server.on("error", err => {
  if (err.code == "EADDRINUSE") {
    console.warn("port in use .... retrying ......");
    setTimeout(() => {
      server.close();
      server.listen(PORT);
    }, 1000);
  } else if (err.code == "ECONNRESET") {
    console.log("ver como tratar esse erro");
  } else console.log(err);
});
