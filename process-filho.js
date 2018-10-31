var spawn = require("child_process").spawn,
  dir = spawn("dir", { shell: true });

dir.stdout.on("data", function(data) {
  console.log("stdout: " + data);
});

dir.stderr.on("data", function(data) {
  console.log("stderr: " + data);
});

dir.on("close", function(code) {
  console.log("child process exited with code " + code);
});
