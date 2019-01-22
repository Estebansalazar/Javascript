

var divs= document.getElementsByTagName('div');
console.log(divs);


var divsRojos= document.getElementsByClassName('rojo');
var divsAmarillos=document.getElementsByClassName('amarillo');

var valor;
    for ( valor in divs) {

// si  divs[valor].textContent es un string haz lo siguiente 
        if (typeof divs[valor].textContent == 'string') {
                    //creo un elemento html
       var elemento= document.createElement("p");
       //agrego el valor al texto
        var texto = document.createTextNode(divs[valor].textContent);
        //meto el valor al parrafo
        elemento.appendChild(texto);

        //se lo agregamos al id correspondiente
        document.querySelector("#miseccion").appendChild(elemento);
            
        }

    }

var elemento;
for (elemento in divsRojos) {
    //si exactamente el nombre de la clase es igual a rojo, coloreala
    if (divsRojos[elemento].className=="rojo") {
        divsRojos[elemento].style.background="red";
    }
}

divsAmarillos[0].style.background="yellow";

/*
Probando el query  selector
*/
var id = document.querySelector(".rojo");
console.log(id);