function enviar(){
   // var array = [[1,"Hola",3],["adios",3,2],[4,"Manzana",5]];
var array = [[document.getElementById("1").value,document.getElementById("2").value,document.getElementById("3").value],
[document.getElementById("4").value,document.getElementById("5").value,document.getElementById("6").value],
[document.getElementById("7").value,document.getElementById("8").value,document.getElementById("9").value]];
console.log(array);
var output = "";
array.forEach((element,i) => {
    if(i%2==0){
        element.forEach((element,j) =>{
            if(j%2!=0){
                output += element +" ";
            }
        });
    }});
alert(output)
console.log(output)
}