var buf1 = new Buffer("this is the way we buid our buffer");
var tam = buf1.length;
// cria um buffer com a fatia do antigo
var buf2 = buf1.slice(19, tam);
console.log("buf1");
console.log(buf1.toString());
console.log("mostra o buf2 apos o slice do buf1");
console.log(buf2.toString());

//modifca o segundo buffer
buf2.fill("*", 0, 5);
console.log("buffer 2 alterado");
console.log(buf2.toString());

console.log("impacto no 1 buffer");
console.log(buf1.toString());
