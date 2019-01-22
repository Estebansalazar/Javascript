
/*
Creamos una lista de arrays con html y javascript
*/

var lenguajes= new Array ("php","go","javascript","python");

document.write("<h1>Lenguajes de programación </h1>")
document.write("<ul>");

for (var i=0;i<= lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
document.write("<ul>")
