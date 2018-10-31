var readline = require("readline");

//cria a interface
var rl = readline.createInterface(process.stdin, process.stdout);

rl.question("e agora?", function(resp) {
  console.log("Resposta = " + resp);
  rl.setPrompt("#");
  rl.prompt();
});

rl.on("close", function() {
  closeInterface();
});

function closeInterface() {
  rl.close();
  console.log("saindo do console");
}

rl.on("line", function(cmd) {
  if (cmd.trim() == "sai") {
    closeInterface();
    return;
  }

  console.log("repeting: " + cmd);
  rl.prompt();
});
