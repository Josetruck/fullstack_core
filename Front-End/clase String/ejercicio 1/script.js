var longString = new String(prompt("Introduce una frase"));
console.log(longString)
var palabras = longString.split(" ");
console.log(palabras);
var cont = 0;
for (let i = 0; i < palabras.length; i += 2) {
    for (let j = 0; j < palabras[i].length; j++) {
        if (palabras[i].charAt(j) == "a") {
            cont++
        }
    }
}
alert("la a aparece "+cont+" veces en las palabras imapres")