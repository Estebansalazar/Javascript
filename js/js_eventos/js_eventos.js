'use strict'

//eventos del mouse


var boton=document.querySelector("#boton");

var bg = boton.style.background;
function cambiarColor(){
    if(bg.includes("green")){
        boton.style.background = "yellow";
    }else{
        boton.style.background="green";
    }
    return true;
}

//escuchador de eventos
//le pasamos una fincion de callback que nos cambia el color
boton.addEventListener('click',function (){
    cambiarColor();
})

//mouse hover

boton.addEventListener('mouseover', function(){
    boton.style.background="#ccc";
});

//mouseout, sirve para cuando salgo de encima del boton

boton.addEventListener('mouseout', function(){
    boton.style.background="black";
});

//[evento focus], al presioner en un campo nos tira en consola que estamos focus
//con el area de texto
var input= document.querySelector("#campo_nombre");
input.addEventListener('focus', function(){
    console.log("[FOCUS]estas dentro del input");
});

//blur
input.addEventListener('blur', function(){
    console.log("[BLUR]estas fuera del input");
});

//[keydown], nsos lee los caracteres que le estamos pasando a través
//de nuestro formulario mediante "String.fromCharCode(evento.keyCode)"
input.addEventListener('keydown', function(evento){
    console.log("[Keydown]estas pulsando una tecla",String.fromCharCode(evento.keyCode));
});

//keypress
input.addEventListener('keypress', function(evento){
    console.log("[keypress] has pulsado la tecla",String.fromCharCode(evento.keyCode));
});

//key up
input.addEventListener('keypress', function(evento){
    console.log("[keyup] presionado la tecla",String.fromCharCode(evento.keyCode));
});