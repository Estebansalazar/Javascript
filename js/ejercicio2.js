'use strict'

var suma=0;
var contador=0;

//usando el bucle do-while
//hace esto mientras numero sea mayor igual a 0

do {
    var numero =parseInt(prompt("introduce números a sumar")) ;

    //si no es numero
    if(isNaN(numero)){
        numero=0;
    }else if (numero>=0){
        suma=suma+numero;
        contador++;
    }
console.log(suma);
console.log(contador);
} while (numero>=0);

alert("la suma de todos los numeros es: "+suma);

alert("la media de todos los numeros es: "+(suma/contador));


