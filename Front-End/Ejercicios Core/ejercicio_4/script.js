var cargador = 17;
var disparos = "";
var probabilidad = Math.floor(Math.random() * 10);
console.log(probabilidad);
if(probabilidad > 2){
    alert("Illo, que coraje. Me he quedao pillá")
} else {

for (let i=0;i<=cargador;i++) {
    disparos = disparos + "pium \npium \npium \n\n";
    cargador = cargador -3;
}
if (cargador == 2) {
    disparos = disparos + "pium \npium";
    cargador = cargador -2;
} else if (cargador == 1) {
    disparos = disparos + "pium";
    cargador = cargador -1;
}
alert(disparos);
}
