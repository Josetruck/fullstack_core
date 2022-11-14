var arrayVacio = [];
var arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var arrayNumerosPares = [0, 2, 4, 6, 8];
var arrayBidimensional = [[0, 1, 2], ["a", "b", "c"]];
function suma(n1, n2) {
    return n1 + n2;
}
function potenciacion(n1,n2){
    return n1^n2;
}
function separarPalabras(frase){
    var frase = prompt("Introduce una frase.");
    var output = []
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] == " ") {
            output = output +",";
        } else {
            output = output + frase[i];
        }
    }
    alert(output)
}
function repetirString(){ 
    var frase = prompt("Introduce un string.");
    var num = parseInt(prompt("Introduzca cuantas veces quieres repetir la frase"));
    var output = "";
    for(let i=0;i<num;i++){
        output = output + frase;
    }
    alert(output)
}
function esPrimo(num){
    var i=2;
    while(num%i != 0){
        i++;
    }
    return i==num;
}
function ordenarArray() {
    var numeros = prompt("introduce una serie de numeros")
    var mem;
    var k;
    var i;
    console.log(numeros);
    console.log(numeros.length);
    console.log(numeros[2]);
    for (k = 1; k < numeros.length; k++) { // este bloque se repite 7 veces para que finalmente la cifra mayor quede a la derecha del todo.
        for (i = 0; i < numeros.length; i++) {// este bloque se repite 7 veces para desplazar la cifra mayor un paso a la derecha.
            if (numeros[i] > numeros[i + 1]) {
                mem = numeros[i];
                numeros[i] = numeros[i + 1];
                numeros[i + 1] = mem;
            }
        }
    } alert(numeros);
}
