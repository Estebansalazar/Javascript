/*
Funcion anonima es una fucion que no tiene nombre
*/

function sumame(num1,num2,sumaYmuestra, sumaPordos) {
    var sumar=num1+num2;


    //1. le SumayMuestra y sumaPordos son el 
    //nombre de nuestras funciones anonimas
    sumaYmuestra(sumar);
    sumaPordos(sumar);
    return sumar;

}
//1.1 al pasarla como parametros usamos la función sin nombre
//que hace referencia a sumaYmuestra y  sumaPordos
sumame(5,1,function(dato){
    console.log("la suma es:",dato);
},
function(dato){
    console.log("la suma es: ",(dato*2));
})
