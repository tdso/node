var net = require("net");
// var redis = require("redis");
var log = console.log.bind(console);
var fs = require("fs");

var server = net
  .createServer(con => {
    log("conected aplicacao");

    // var client = redis.createClient({
    //   host: "127.0.0.1",
    //   port: 6379
    // });

    // client.on("error", err => {
    //   log("Error => " + err);
    // });

    // client.on("connect", () => {
    //   log("Redis connected !! ");
    // });

    //o 3 bd é uma fila de msg
    // client.select(3);

    // ouve dados de entrada
    con.on("data", data => {
      log(data + " from " + con.remoteAddress + " " + con.remotePort);
      // persiste os dados
      // client.rpush("fila", data);
      fs.appendFile("./fila.txt", data, function(err) {
        if (err) console.log(err);
      });
    });
  })
  .listen(8124);

server.on("close", err => {
  client.quit();
});
log("server listening... port 8124");
