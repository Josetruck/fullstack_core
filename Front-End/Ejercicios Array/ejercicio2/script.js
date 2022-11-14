var a = [1,1]
var n = parseInt(prompt("Introduce la longitud del Array"));
for(let i=2; i <= n; i++){
    x = a[i-1]+a[i-2]
 a.push(x)
}
alert(a)
console.log(a)