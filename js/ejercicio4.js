'use strict'

/*
hacer un programa que muestre todos los numeros entre dos 
numeros introducidos por el usuario
*/

var total =0;
var num1 =parseInt( prompt("introduce numero 1"));
var num2 =parseInt(prompt("introduce numero 2")) ;

document.write("<h1> De "+num1+" a "+num2+" están estos núemros</h1>");


for (var i = num1; i <= num2; i++) {
    document.write(i+"</br>");
    
}