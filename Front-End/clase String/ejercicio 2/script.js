var longString = new String(prompt("Introduce una frase"));
console.log(longString)
var palabras = longString.split(" ");
console.log(palabras);
var output =[];
for(let i= palabras.length-1; i>=0;i--){
    output= output + palabras[i] + " "
}
alert(output)