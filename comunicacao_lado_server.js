var http = require("http");
var querystring = require("querystring");

var server = http.createServer().listen(8124);

server.on("request", function(req, res) {
  console.log("server on");

  if (req.method == "POST") {
    console.log("metod post");
    var body = "";
    /* monitora a chegada dos dados e adiciona pacotes de dados (data chunk)
       ao final do corpo da pagina */

    req.on("data", function(data) {
      console.log("on data");
      body += data;
      console.log("body = " + body);
    });

    // monitora o termino do envio dos dados
    req.on("end", function() {
      var post = querystring.parse(body);
      console.log("post recebido");
      console.log(post);
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Retransmitindo sua msg >>>> " + querystring.stringify(post));
    });
  }
});
console.log("server listening 8124");
