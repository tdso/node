process.stdin.setEncoding('utf8');
console.log('teste');
process.stdin.on('readable', function(){
	console.log('evento');
	var input = process.stdin.read();
	if (input !== null){
		process.stdout.write(input);
		
		var comand = input.trim();
		if (comand == 'exit'){
			process.exit(0);
		}
	}
});

