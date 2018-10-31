var http = require("http");
var querystring = require("querystring");

var postdata = querystring.stringify({
  msg: "Dados do cliente: Galo !!"
});

var options = {
  hostname: "localhost",
  port: 8124,
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Lenght": postdata.length
  }
};

var req = http.request(options, function(res) {
  console.log("STATUS = " + res.statusCode);
  console.log("HEADERS = " + JSON.stringify(res.headers));
  res.setEncoding("utf8");

  // monitora a resposta
  res.on("data", function(chunk) {
    console.log("Resposta do Server: " + chunk);
  });

  res.on("end", function() {
    console.log("Dados da resposta finalizou ....");
  });
});

req.on("error", function(e) {
  console.log("Erro no envio dos dados ao servidor");
  console.log(e.message);
});

req.write(postdata);
req.end();
