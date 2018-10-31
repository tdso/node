var dgram = require("dgram");
var client = dgram.createSocket("udp4");

process.stdin.on("data", data => {
  client.send(data, 0, data.length, 8124, "localhost", function(err, bytes) {
    if (err) console.log("error: " + err);
    else console.log("sucesso ....");
  });
});
