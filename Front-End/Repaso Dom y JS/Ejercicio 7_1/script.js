// Cantidad de enlaces: alert(document.getElementsByTagName("a").length);
var enlaces = document.getElementsByTagName("a");
console.log(enlaces.length);
alert("La página tiene " + enlaces.length + " enlaces.");
// Penultimo enlace
var ultimoenlace = document.getElementsByTagName("a")[document.getElementsByTagName("a").length - 2].href;
alert("El ultimo enlace es "+ ultimoenlace);
// Numero de enlaces que llevan a http://prueba
var count = 0;
for(let i=0; i<enlaces.length;i++){
    if(enlaces[i].href=="http://prueba/"){
        count++;
    }
}
alert("la página contiene " + count+ " enlaces a http://prueba")
// numero de enlaces del tercer parrafo.

var parrafo = document.getElementsByTagName("p")[2];
var nenlaces = parrafo.getElementsByTagName("a").length;
alert("El último parrafo contiene " + nenlaces + " enlaces")
console.log(parrafo)