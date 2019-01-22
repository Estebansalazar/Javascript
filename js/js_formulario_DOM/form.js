window.addEventListener('load',function(){
    console.log('DOM cargado');

// captura el evento formulario de la etiqueta formulario

   var formulario= document.querySelector("#formulario");

   //seleccionamos la caja dashed, y la escondemos
   var box_dashed=document.querySelector(".dashed");
   box_dashed.style.display="none";

   formulario.addEventListener('submit',function(){
       console.log("evento submit capturado");


    //accedemos al dom de los datos
    //capturamos el valor con queryselector().value
    var nombre=document.querySelector("#nombre").value;
    var apellidos =document.querySelector("#apellidos").value;
    var age =parseInt(document.querySelector("#age").value);

    //5.- validador de datos
    // el método trim() elimina los espacios en blanco

    if (nombre.trim()==null || nombre.trim().length==0) {
        alert("el nombre no es válido")
        document.querySelector("#error_nombre").innerHTML="nombre no válido";
        return false;
    }else{
        document.querySelector("#error_nombre").style.display = "none";
    }

    if (apellidos.trim()==null || apellidos.trim().length==0) {
        alert("el apellido no es válido")
        return false;
    }

    if (age==null || age <=0 || isNaN(age)) {
        alert("la edad no es válido")
        return false;
    }





    //mostramos el div una vez que se presiona submit
    box_dashed.style.display="block";

    console.log(nombre,apellidos,age);
   
    //array con los datos del usuario
    var datos_usuarios=[nombre,apellidos,age];

    var indice;
    for (indice in datos_usuarios){
          //creamos un parrafo
        var parrafo=document.createElement("p")
        parrafo.append(datos_usuarios[indice]);
        //le agrego a mi dashed (div) toda la info que ingreso por consola
        box_dashed.append(parrafo);
    }
   });


});