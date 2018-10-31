var net = require("net");
var client = new net.Socket();

client.setEncoding = "UTF8";

// conecta ao servidor

client.connect(
  "8124",
  "localhost",
  () => {
    console.log("client connected server");
    client.write("Who needs a browser to communicate?");
  }
);

client.on("data", data => {
  console.log("client = resposta do servidor");
  console.log(data.toString());
});

client.on("close", () => {
  console.log("client = server closed connection");
});

process.stdin.on("data", data => client.write(data));
