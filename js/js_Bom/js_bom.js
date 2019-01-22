'use strict'

//obtenemos medidas de la pantalla
function getBom (){
    console.log(screen.height);
    console.log(screen.width);
    console.log(window.location);
}
getBom();

//obtenemos una nueva ventana pasando la url
function abrirUrl (url){
    window.open(url);
}