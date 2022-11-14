
 function recoger(){
    var contacto = {};
    var email = document.getElementById("email").value;
    var datos = {
       "nombre" : `${document.getElementById("nombre").value}`,
       "mensaje" : `${document.getElementById("mensaje").value}`
    }
    if (localStorage.getItem("contacto") == undefined ){
        contacto[email] = datos;   
        localStorage.setItem('contacto',JSON.stringify(contacto))
    } else {
        contacto = JSON.parse(localStorage.getItem('contacto'));
        contacto[email] = datos;
        localStorage.setItem('contacto',JSON.stringify(contacto))
    }
}
function mostrar(){
    var lista = JSON.parse(localStorage.getItem('contacto'));
    var mails=Object.keys(lista)
    var datos2 = Object.values(lista);
for(let i=0;i<mails.length;i++){
    insertar("Email del contacto: \n" + mails[i]);
    insertar(datos2[i].nombre +": " + datos2[i].mensaje);
    insertar("-------------------------------------------")
}
  function insertar(cadena){
    var etiqueta1 = document.createElement("p"); 
    var contenido1 = document.createTextNode (cadena); 
    etiqueta1.appendChild (contenido1); 
    document.body.appendChild(etiqueta1)
  }
}
function borrar(){
    var clave = prompt("Introduce el email del contacto que quieres borrar")
    var lista = JSON.parse(localStorage.getItem('contacto'));
    delete lista[clave];
    localStorage.setItem('contacto',JSON.stringify(lista));
    location.reload();
}
function borrarTodo(){
    var respuesta = prompt("¿Está seguro de que quiere borrar todo? ( SI o NO)");
    if(respuesta =="SI"){
        localStorage.clear();
    }
}