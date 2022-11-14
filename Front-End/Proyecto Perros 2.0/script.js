var cont = 0
var perromuestra;
function ejecutar() {
    fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(res => res.json())
        .then(json => {
            perromuestra = json.message;
            console.log(perromuestra)
            var imagen = document.getElementById("muestra");
            imagen.height = 150;
            imagen.width = 150;
            imagen.src = perromuestra;
        })
    return perromuestra
}

function pintar(perromuestra) {
    if (buscar(perromuestra)) {
        alert("El perro ya está en la lista");
        ejecutar();
    } else {
        localStorage.setItem(`perro${cont}`, perromuestra)
        var guardaimg = document.createElement("img");
        var perroguarda = perromuestra;
        if (cont < 20) {
            guardaimg.src = perroguarda;
            guardaimg.height = 150;
            guardaimg.width = 150;
            guardaimg.id = `d${cont}`
            document.querySelector("#grid").appendChild(guardaimg);
            cont++;
            ejecutar()
            return cont
        } else {
            alert("Has alcanzado el máximo de perros para guardar")
        }
    }
}

function buscar(perro) {
    var lista = localStorage;
    for (let i = 0; i < lista.length; i++) {
        if (perro == lista[`perro${i}`]) {
            return true
        }
    }
}
var razas = Object.values(localStorage);
var razas2 = []
for (let i = 0; i < razas.length; i++) {
    var razasuelta = razas[i].split("/")[4];
    razas2.push(razasuelta)
}
console.log(razas2)
//cosa copiada, pendiente de entender:
const resultado = razas2.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})
console.log(resultado)

function grafica() {
    document.getElementById("myChart").style.visibility = "visible";
}