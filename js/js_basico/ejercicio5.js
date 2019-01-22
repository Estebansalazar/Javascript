'use strict'
/*
Mostrar todos los numeros pares que hay entre dos numeros
introducidos por el usario
*/


var num1= parseInt(prompt("Introduzca numero 1"));
var num2= parseInt(prompt("Introduzca numero 2"));

document.write("<h1> De "+num1+" a "+num2+" están estos núemros</h1>");

for (var i= num1; i <= num2; i++) {
    
    if (i%2==0) {
        document.write("Numeros pares: </br>"+i+"</br>");
    }else if (i%2 !=0) {
        document.write("nuemros impares: </br>"+i+"<br>");
    }
    
}
