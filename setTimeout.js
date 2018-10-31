/* setTimeout(
  function(nome) {
    console.log("diga ai " + nome);
  },
  3000,
  "Thiagao da Massa"
);

console.log("esperando o timer ...");
 */

///////////////////////////////////////

/* var timer1 = setTimeout(
  function(name) {
    console.log("oi " + name);
  },
  30000,
  "thiago"
);

setTimeout(
  function(timer) {
    clearTimeout(timer);
    console.log("clear time");
  },
  3000,
  timer1
);

console.log("esperando o timer ...");
 */

//////////////////////////////////////////////

/* var interval = setInterval(
  function(name) {
    console.log("oi " + name);
  },
  3000,
  "thiago"
);

setTimeout(
  function(intervalo) {
    clearInterval(intervalo);
    console.log("clear time");
  },
  30000,
  interval
);

console.log("esperando o timer ..."); */

///////////////////////////////////////////////
// esse exemplo nao e bom, pois ele executa a funcao a e o resultado e input para funcao b
// nao e isso que acontece acima -

/* var a = function(num) {
  for (var i = 0; i < num; i++) {
    console.log("number = " + i);
  }
};
var b = function(f) {
  console.log("execucao b");
};
b(a(3));
 */

//////////////////////////
// passando uma funcao como parametro para outra funcao
//
/* var a = function(num = 5) {
  for (var i = 0; i < num; i++) {
    console.log("number = " + i);
  }
};
var b = function(f) {
  f(3);
  console.log("execucao b");
};
b(a); */
//////////////////////////////////////

val1 = funcao1();
console.log(val1);
val2 = funcao2(val1);
console.log(val2);
val3 = funcao3(val2);
console.log(val3);

function funcao1() {
  return "a";
}
function funcao2() {
  return "b";
}
function funcao3() {
  return "c";
}

///////////////////////////////////////
