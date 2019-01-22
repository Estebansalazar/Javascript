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