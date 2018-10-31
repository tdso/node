var net = require("net");
const PORT = 8124;

var server = net
  .createServer(con => {
    console.log("server conectado");

    con.on("data", data => {
      console.log(
        "server = " + data + "from " + con.remoteAddress + " " + con.remotePort
      );
      con.write("Repeat >>>> " + data);
    });

    con.on("close", () => {
      console.log("server = client closed connection !!!!!");
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
  } else console.log(err);
});
