

var lenguajes= new Array ("php","go","javascript","python");


/*
Creamos una variable búsqueda, que en el array lenguaje mediante
la funcion find, tendra una función callback
sin nombre que recibirá como parametro lenguaje
y retornará el parametro ingresado
*/
var busqueda= lenguajes.findIndex(function(lenguaje){
    return lenguaje=="php";
})

//utilizando función flecha
// var busqueda= lenguajes.find(lenguaje)=>
//     lenguaje=="php";
// )

console.log(busqueda);