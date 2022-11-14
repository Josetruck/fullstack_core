window.onload = () => {
    var numEnlaces = document.getElementsByTagName("a").length;
    for (let i = 1; i <= numEnlaces; i++) {
        document.getElementById("enlace_" + i).setAttribute("onclick" , "muestraOculta(this)");
    }
}
function muestraOculta(enlace){
    console.log(enlace.id)
    var numid = enlace.id[enlace.id.length -1]
    var parrafo = document.getElementById("contenidos_" + numid);
    if (parrafo.style.visibility == "" || parrafo.style.visibility == "visible") {
        parrafo.style.visibility = "hidden";
        enlace.innerText = "Mostrar contenidos";
    } else {
        parrafo.style.visibility = "visible";
        enlace.innerText = "Ocultar contenidos";
    }
    
}



/* //funcion que sirve para ocultar y mostrar
function muestraOculta(this) {
    var parrafo = document.getElementById("contenidos_" + num;)
    var enlace = document.getElementById("enlace_" + num);
    if (parrafo.style.visibility == "" || parrafo.style.visibility == "visible") {
        parrafo.style.visibility = "hidden";
        enlace.innerText = "Mostrar contenidos";
    } else {
        parrafo.style.visibility = "visible";
        enlace.innerText = "Ocultar contenidos";
    }
}  */
