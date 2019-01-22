'use strict'

var pelicula={
    titulo:"batman",
    year:2010,
    pais:"usa"
}

//enviamos un array el Json
var peliculas=[
    {titulo:"robocop",year:2015,pais:"Chile"},
    pelicula
];


//Cambiamos parte del json
//pelicula.titulo="superman";
console.log(peliculas);

var caja_peliculas=document.querySelector("#peliculas");

//function foo soluciona el problema de carga de null
function foo(){
var index;
for (index in peliculas) {
    var p = document.createElement("p");
    p.append(peliculas[index].titulo+" "+peliculas[index].year+" "
    +peliculas[index].pais);
    caja_peliculas.append(p);
}
}
