'use strict'

//use timer
window.addEventListener('load',function(){
    var tiempo= setInterval(function (){
        console.log("cambio de tiempo");
        //nos cambia a los 3 segundos el tamaño de nuestro h1
        document.querySelector('h1').style.fontSize = "50px";

    }, 3000);
});