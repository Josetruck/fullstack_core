function calcular(){
var x = document.getElementsByClassName("1");
var y = [];
for(let i=0; i<x.length;i++){
    if(x[i].value!=""){
    y.push(parseInt(x[i].value))
    }
}
var z = y.reduce(function(anterior, actual){
return anterior + actual;
});
var media = z / y.length;
alert("La media de los números es de " + media)
};