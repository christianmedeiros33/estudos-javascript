// operadores de comparacao

// ==, !=, >, <, >=,<=

/**
 * == verifica os valores
 * != verifica se dois operandos não são iguais retornando booleano
 * > maior que
 * < menor que
 * >= maior ou igual
 * <= menor ou igual
 */

var age = 17;

// 0 nao procegue na verificacao, 1 sim
var hasCar = 1;

if (age >= 18) {
  console.log("pode fazer a carteira");
}

if (age <= 17) {
  console.log("nao pode fazer a carteira");
}

if (hasCar) {
  console.log("not car");
}

var names = "christian";

//se o nome for igual ele entra no console.log
if (names == "christian") {
  console.log("this name is: " + names);
}

//se o nome for diferente ele entra no console.log
if (names != "pedro") {
  console.log("this name not is: " + names);
}

if (20 > 10) {
  console.log("passou 1");
}

if (10 < 20) {
  console.log("passou 2");
}
