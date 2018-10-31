let buf = new Buffer("Meu exemplo");
console.log('buffer = ' ); console.log(buf); // imprime os bits

let json = JSON.stringify(buf);
console.log('json = ' ); console.log(json); // converte em objeto Json - os dados exibidos estao em sequencia de octetos(ilegivel)

let buf2 = new Buffer(JSON.parse(json).data); // converte de json para buffer
console.log('buf2 = ');
console.log(buf2.toString());  // converte de buffer para string

console.log('----------------------------------------------------------------------');

let StringDecoder = require('string_decoder').StringDecoder;
let decoder = new StringDecoder('utf-8');

let buf3 = new Buffer('texto lindo');
console.log(decoder.write(buf3));

console.log('----------------------------------------------------------------------');

var buf4 = new Buffer(4);
buf4.writeUInt8(0x63,0);
buf4.writeUInt8(0x61,1);
buf4.writeUInt8(0x74,2);
buf4.writeUInt8(0x73,3);
console.log(buf4.toString());
