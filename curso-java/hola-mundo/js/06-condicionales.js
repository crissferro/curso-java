'use strict'

// condicionales IF
//instruccion para comparar algo, si a es algo que b entonces haz algo

var edad = 80;
var nombre = 'cristian ferro';

// operadores relacionales
// mayor >
// menor <
// mayor o igual >=
// menor o igual <=
// igual ==
// diferente o distinto !=

if (edad >= 18) {
    //es mayor de edad
    console.log(nombre + " tiene " + edad + " años, es mayor de edad");

    if (edad <= 33) {
        console.log('todavia eres milenial');
    } else if (edad >= 70) {

        console.log('eres anciano');


    } else { console.log('ya no eres milenial'); }
    // es menor de edad
} else {
    console.log(nombre + " tiene " + edad + " años, es menor de edad");
}