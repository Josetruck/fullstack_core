/* 1. Usando la función filter en una sola línea coloca en un array las palabras que contienen "t" y/o "a" y están en posiciones impares.
array constante del que partimos: ["tierra", "loro", "alto", "otorgar", "cosa", "tumbona", "fresón", "tirar"]
 */

var x = ["tierra", "loro", "alto", "otorgar", "cosa", "tumbona", "fresón", "tirar"];
var resultado = x.filter((element,i)=> {if (i%2==0){return element.includes('t') || element.includes('a')}})
console.log(resultado)