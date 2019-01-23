'use strict'

//formulario que nos permita añadir películas

var formulario=document.querySelector("#formpeliculas");

formulario.addEventListener("submit",function(){
    var titulo=document.querySelector("#addpelicula").value;

    if (titulo.length>=1) {
        localStorage.setItem(titulo,titulo);
    }
});

//mostrar los elementos almacenados en la pagina

var ul = document.querySelector("#peliculas-list");
for (var i in localStorage){

    if(typeof localStorage[i]=="string"){
        console.log(localStorage[i]);

        var li=document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
   
}

//borrar pelicula


var formulario=document.querySelector("#borrarpeliculas");

formulario.addEventListener("submit",function(){
    var titulo=document.querySelector("#quitar-pelicula").value;
    if (titulo.length>=1) {
        localStorage.removeItem(titulo);
    }
});
