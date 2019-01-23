'use strict'

//fetch y peticiones a servicios a API rest

//realizamos peticion ajax con fetch

var div_usuarios= document.querySelector("#usuarios")
var usuarios=[];

//accedemos a servicio remoto
fetch('https://reqres.in/api/users?page=2')

//creamos una funcion de callback, recibe data y lo convierte en json
//es decir cuando recibios los datos lo convertimos a jason
    .then(data => data.json())
//tenemos en la variable data todos los datos recogidos 
//y dentro de la variable usuarios guardamos los users de la data
    .then(users=>{
    //almacenos los users.data en el array de usuarios
    console.log(usuarios);
    listadoUsuarios(users.data);
    });
    //mostramos el array de usuarios
    //con el ciclo map(parametro, indice)


    function listadoUsuarios(usuarios){
        usuarios.map((user,i)=>{
            let nombre =document.createElement('h2');
            nombre.innerHTML =i+" "+user.first_name +" "+user.last_name;
            div_usuarios.appendChild(nombre);
        });
    }
   

