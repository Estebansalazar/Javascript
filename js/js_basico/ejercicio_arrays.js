'use strict'

/*
Crear un programa que pida seis numeros por pantalla 
y los meta en un array, debe mostrar todos los elementos del
array en el cuerpo y la consola
2) se debe obtener el array ordenado 
3)invertir el orden y mostrarlo
4) mostrar cuantos elementos tiene el array
5) realizar una busqueda de un valor introducido por el usaurio
y que nos diga si esta en el array y que además si esta.
*/

//la funcion recibe un array como argumento
function mostrarArray(elementos){
    document.write("<ul>");

    elementos.forEach((elemento,index)=>{
        document.write("<li>"+"posicion: "+index+" valor:" +elemento+"</li>")
    });
    
    document.write("</ul>")
}


var numeros= [];

//pedir 6 números
for (let i= 0; i <= 5; i++) {
    numeros[i]=parseInt(prompt("Ingrese un numero"));    
}

//mostrar 6 numeros
mostrarArray(numeros);


console.log(numeros);

//ordenar numeros
document.write("<h2> numeros ordenados </h2>")
numeros.sort();
mostrarArray(numeros);


// invertir nombre y mostrar
numeros.reverse();
mostrarArray(numeros);



//numero elementos array

document.write("<h2> El array tiene: "+numeros.length+"</h2>");

//buscar elemento (usamos la función de callback)

var busqueda= parseInt(prompt("Ingrese numero a buscar: "));
var posicion= numeros.findIndex(numero => numero == busqueda);
console.log(posicion);

if (posicion && posicion !=-1) {
    document.write("<h1> elemento encontrado. En la posición: </h1>"+posicion);
}else{
    document.write("<h1> NOOOO elemento encontrado </h1>");

}