'use strict'

//local storage, es una memoria que persiste durante la navegación

//1.-comrpobar disponibilidad local storage

if (typeof (Storage)!== undefined) {
    console.log("Local storage disponible")
}else{
    console.log("local storage incompatible")
}

//guardar datos

localStorage.setItem("titulo","Curso de symfony de victor robles");

//recuperar elemento local storage

console.log(localStorage.getItem("titulo"));

//guardar objetos en el local storage

var usuario={
    nombre:"esteban",
    email:"esteban@gmail.com",
    web:"hola.cl"
};

//debemos transformar nuestro Json en Json string ya que no 
//se puede guardar un json en formato puro
localStorage.setItem("usuario",JSON.stringify(usuario));

//recuperar objeto del local storage
//JSON.parse nos transforma un string Json en un objeto json

var use_js=JSON.parse(localStorage.getItem("usuario"));
console.log(use_js);

//agregamos el elemento al DOM
document.querySelector("#peliculas").append(use_js.nombre);

//borrar elementos local storge
localStorage.clear();