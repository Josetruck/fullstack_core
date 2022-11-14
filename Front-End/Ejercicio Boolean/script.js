array = [];
for (let i=1; i<=6;i++){
    array.push(prompt("Introduce un elemento"))
}
console.log(array);

a = new Boolean(array[0]>array[2] && array[1]<array[3] && array[4]==array[5])
console.log(a.valueOf())