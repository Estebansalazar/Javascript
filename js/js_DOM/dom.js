'use strict'

function cambiColor(color){
    caja.style.background = color;
}


//nos devuelve el div con id micaja
var caja =document.getElementById("micaja");

//cambiando lo que hay dentro del elemento html
caja.innerHTML ="lalalal";

//cambiamos el color de la caja con javascript
caja.style.background="red";

//creamos una clase desde javascript
caja.className ="clase1";

console.log(caja);

//consegir elementos por etiqueta
var divs = document.getElementsByTagName('div');
console.log(divs);


/*
Mostramos el contenido de un cierto div,
que selecionamos de nuestro array
*/
//sacamos el contenido que tiene el div
var contenido= divs[2].textContent;
//mostramos el contenido 
console.log(contenido);