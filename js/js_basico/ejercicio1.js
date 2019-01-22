'use strict'
var num1= parseInt(prompt('Introduce un número 1:'));
var num2= parseInt(prompt('Introduce un número 2:'));

//isNan nos dice si es un numero o no
//si se cumple cualquiera de estas condiciones, es ejecutará 
// el código

while (num1<=0 || num2<=0 || isNaN(num1) || isNaN(num2)){
    num1= parseInt(prompt('Introduce un número 1:'));
    num2= parseInt(prompt('Introduce un número 2:'));

}


if(num1==num2){
    alert("los numeros son iguales");
}else if(num1>num2){
    alert("numero 1 es mayor");
}else if (num2>num1){
    alert("num2 es mayor");
}