'use strict'
//let y var
// prueba con var
var numero = 40;
console.log(numero); //valor 40
if (true) {
    var numero = 50;
    console.log(numero);
} //valor 50
console.log(numero); //valor 50

//Prueba con let

var texto = "Curso JS";
console.log(texto); //curso js

if (true) {
    let texto = "curso cristian";
    console.log(texto); //curso cristian
}

console.log(texto); //curso js