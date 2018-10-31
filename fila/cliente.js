var net = require("net");
var client = new net.Socket();

client.setEncoding = "UTF8";

// conecta ao servidor

client.connect(
  "8124",
  "localhost",
  () => {
    console.log("client connected server");
  }
);

// monitora a chegada de dados no cliente
client.on("data", data => {
  console.log("client = resposta do servidor");
  console.log(data.toString());
});

// monitora o fechamento de conexao do servidor
client.on("close", () => {
  console.log("client = server closed connection");
});

// monitora a entrada de dados no terminal
process.stdin.on("data", data => client.write(data));
