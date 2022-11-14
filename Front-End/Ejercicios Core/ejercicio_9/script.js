function segundero(){
    var h=parseInt(prompt("inserte las horas"));
    var m=parseInt(prompt("inserte los minutos"));
    var s=parseInt(prompt("inserte los segundos"));
    output = h * 3600 + m * 60 + s;
    alert("la cantidad de segundos en total es de "+ output + " segundos.")
}

function horario(){
    var s = parseInt(prompt("inserte los segundos"));
    var outputh = Math.floor(s/3600);
    var outputm = Math.floor((s%3600)/60);
    var outputs = (s%3600)%60;
    alert(outputh+":"+outputm+":"+outputs)
}
