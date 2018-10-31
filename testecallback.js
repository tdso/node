val1 = function1();
val2 = function2(val1);
val3 = function3(val2);

function function1() {
  setTimeout(function() {
    console.log("function 1");
    return 100;
  }, 5000);
}

function function2(val) {
  setTimeout(function() {
    console.log("function 2");
    return val / 2;
  }, 3000);
}
function function3(val) {
  setTimeout(function() {
    console.log("function 3");
    return val / 2;
  }, 1000);
}
console.log("resultado val1 = " + val1);
console.log("resultado val1 = " + val2);
console.log("resultado val1 = " + val3);
