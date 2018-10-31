var net = require("net");
var client = new net.Socket();
var log = console.log.bind(console);

client.setEncoding("utf8");
client.connect(
  "8124",
  "localhost",
  () => log("cliente conectado ...")
);

// chegada de dados do servidor
client.on("data", data => {
  log("resposta do server para o client >> " + data);
  //client.write(data);
});

// monitora o fechamento de conexao do servidor
client.on("close", () => {
  log("client = server closed connection");
  client.end();
});

// monitora a entrada de dados no terminal
process.stdin.on("data", data => client.write(data));
