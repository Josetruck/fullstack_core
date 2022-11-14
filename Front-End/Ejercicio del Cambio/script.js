function inicializarEfectivo(c500, c200, c100, c50, c20, c10, c5, c2, c1, c05, c02, c01, c005, c002, c001) {
  //le añadimos el 0 a la ultima casilla del array de efectivo en vez de declarar otra variable
    return [c500, c200, c100, c50, c20, c10, c5, c2, c1, c05, c02, c01, c005, c002, c001, 0];
}

function calcularTotal(efectivo, billetesMonedas) {
    efectivo[efectivo.length - 1] = 0
    for (let i = 0; i < efectivo.length - 1; i++) {
        efectivo[efectivo.length - 1] += efectivo[i] * billetesMonedas[i];
    }
    //[efectivo.length - 1] esto representa la ultima casilla del array, simplemente la seleccionamos
    efectivo[efectivo.length - 1] = Math.round((efectivo[efectivo.length - 1] + Number.EPSILON) * 100) / 100; //para redondear a dos decimales
    return efectivo;
}
//Realiza la actualización de la caja, tanto para meter dinero, como para sacarlo en la devolucion.
function actualizarCaja(caja, pago) {
    for (let i = 0; i < caja.length; i++) {
        caja[i] += pago[i]
    }
    return caja;
}

var pago = [];
var precio;

function recoger() {
    var caja = inicializarEfectivo(2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2);
    const billetesMonedas = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    caja = calcularTotal(caja, billetesMonedas);

    precio = parseFloat(document.getElementById("precio").value);
    pago[0] = parseInt(document.getElementById("500").value);
    pago[1] = parseInt(document.getElementById("200").value);
    pago[2] = parseInt(document.getElementById("100").value);
    pago[3] = parseInt(document.getElementById("50").value);
    pago[4] = parseInt(document.getElementById("20").value);
    pago[5] = parseInt(document.getElementById("10").value);
    pago[6] = parseInt(document.getElementById("5").value);
    pago[7] = parseInt(document.getElementById("2").value);
    pago[8] = parseInt(document.getElementById("1").value);
    pago[9] = parseInt(document.getElementById("50 cents").value);
    pago[10] = parseInt(document.getElementById("20 cents").value);
    pago[11] = parseInt(document.getElementById("10 cents").value);
    pago[12] = parseInt(document.getElementById("5 cents").value);
    pago[13] = parseInt(document.getElementById("2 cents").value);
    pago[14] = parseInt(document.getElementById("1 cent").value);
    for (let i = 0; i < pago.length; i++) {
        if (isNaN(pago[i])) {
            pago[i] = 0;
        }
    }
    cobrar(precio, pago, caja, billetesMonedas);
}
function cobrar(precio, pago, caja, billetesMonedas) {
    var posible = true;
    pago = calcularTotal(pago, billetesMonedas);
    //comprobamos diferentes situaciones para ver si es posible hacer la operacion.
    if (pago[pago.length - 1] - precio == 0) {
        alert('Asi me gusta, el dinero justo');
        posible = true;
    } else {
        var devolver = pago[pago.length - 1] - precio;
        if (pago[pago.length - 1] < precio) {
            alert("Te falta dinero para pagar. Dame mas.");
            posible = false;
        } else {
            if (devolver > caja[caja.length - 1]) {
                alert("No tenemos cambio");
                posible = false;
            } else {
                var devolucion = inicializarEfectivo(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                for (var i = 0; i < devolucion.length; i++) {
                    for (var j = 0; j < caja[i]; j++) {
                        if (devolver >= billetesMonedas[i]) {
                            //restamos uno a devolucion[i] para al actualizar la caja en la funcion hacer la suma negativa = resta.
                            devolucion[i]--; 
                            devolver -= billetesMonedas[i];
                            devolver = Math.round((devolver + Number.EPSILON) * 100) / 100;
                        }
                    }
                }
                if (devolver != 0) {
                    alert("No se puede devolver");
                    posible = false;
                } else {
                    //realizamos las actualizaciones necesarias en la caja.
                    caja = actualizarCaja(caja, devolucion);
                    caja = actualizarCaja(caja, pago);
                    caja = calcularTotal(caja, billetesMonedas);
                    var msj = "El cambio es de:\n";
                    console.log(devolucion)
                    //los valores de la condicion para saber la canitdad de billetes que se entregan son menores que 1 porque la devolucion está en negativo.
                    for (let i = 0; i < devolucion.length - 1; i++) {
                        if (devolucion[i] != 0) {
                            if(i<=6 && devolucion[i]<-1){
                            msj += "-" + (devolucion[i] * -1) + " billetes de " + billetesMonedas[i] + "€ \n";
                            } else if(i<=6 && devolucion[i] >= -1){
                                msj += "-" + (devolucion[i] * -1) + " billete de " + billetesMonedas[i] + "€ \n";
                            } else if (i>6 && devolucion[i]<-1){
                                msj += "-" + (devolucion[i] * -1) + " monedas de " + billetesMonedas[i] + "€ \n";
                            } else if (i>6 && devolucion[i]>= -1){
                            msj += "-" + (devolucion[i] * -1) + " moneda de " + billetesMonedas[i] + "€ \n";    
                            }
                        }
                    }
                }
            }
        }
    }
    //crea un boton (si no lo hay ya) para volver a iniciar el programa con los valores iniciales
    var botonif = document.getElementById("rejecutar") == null;
    if (botonif) {
        var texto = "Volver a iniciar"
        var boton = document.createElement("button");
        boton.innerText = texto;
        boton.setAttribute("id", "rejecutar");
        boton.setAttribute("onClick", "location.reload()");
        document.body.appendChild(boton);
    }
//despues de comprobar si se puede hacer la operacion, mostramos el mensaje.
    if (posible) {
        resultado = "El cambio de la operación es: " + ((precio - pago[pago.length - 1]) * -1) + "€\n" + msj + "\nLa cantidad total de caja es de: " + caja[caja.length - 1] + "€";
        etiqueta = document.createElement("h3");
        etiqueta.innerText = resultado;
        document.body.appendChild(etiqueta)
    }
}
//Esta funcion inicia en el HTML las casillas donde se introducirá la información.
function iniciar() {
    var hidebtn = document.getElementById("iniciar");
    document.body.removeChild(hidebtn);
    const idmoneda = ["500", "200", "100", "50", "20", "10", "5", "2", "1", "50 cents", "20 cents", "10 cents", "5 cents", "2 cents", "1 cent"];
    var precio = document.createElement("input");
    precio.setAttribute("placeholder", "Precio total")
    precio.setAttribute("id", "precio");
    document.body.appendChild(precio);
    var salto = document.createElement("br");
    document.body.appendChild(salto);
    for (i = 0; i < idmoneda.length; i++) {
        var entrada = document.createElement("input");
        entrada.setAttribute("id", idmoneda[i]);
        entrada.setAttribute("placeholder", "cantidad de:" + idmoneda[i]);
        document.body.appendChild(entrada)
        var salto = document.createElement("br")
        document.body.appendChild(salto)
    }
    var texto = "Ejecutar"
    var boton = document.createElement("button");
    boton.innerText = texto;
    boton.setAttribute("id", "ejecutar");
    boton.setAttribute("onClick", "recoger()");
    document.body.appendChild(boton);
}
