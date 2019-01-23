'use strict'

//fetch y peticiones a servicios a API rest

//realizamos peticion ajax con fetch

var div_usuarios= document.querySelector("#usuarios")
var div_janet=document.querySelector("#janete")
var usuarios=[];

getUsuarios()
    .then(data => data.json())
    .then(users=>{  
    listadoUsuarios(users.data);

        return getJanet();
    })
    .then(data => data.json())
    .then(janet=> {
        mostrarJanet(usuario);
    });
    
 

    function getUsuarios(){
        return fetch('https://reqres.in/api/users/2');
    }

    function getJanet(){
        return fetch('https://reqres.in/api/users/2');
    }

    function listadoUsuarios(usuarios){
        usuarios.map((user,i)=>{
            let nombre =document.createElement('h2');
            nombre.innerHTML =i+" "+user.first_name +" "+user.last_name;
            div_usuarios.appendChild(nombre);
        });
    }

    function mostrarJanet(user){
            let nombre =document.createElement('h2');
            nombre.innerHTML =user.first_name +" "+user.last_name;
            div_janet.appendChild(nombre)
            div_usuariolistadoUsuarioss.appendChild(nombre);
        
    }
   
   

