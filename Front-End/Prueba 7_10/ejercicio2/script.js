/* 2. Disponemos del siguiente JSON:
"Empleados": [
{ "Nombre": "John", "Apellido": "Doe"},
{ "Nombre": "Anna", "Apellido": "Smith"},
{ "Nombre": "Pedro", "Apellido": "Jones"}
]
Permite por medio de un formulario que el usuario pueda insertar empleados y cambiar su nombre, apellido o ambos. */

var empleados = [
    { Nombre: "John", Apellido: "Doe"},
    { Nombre: "Anna", Apellido: "Smith"},
    { Nombre: "Pedro", Apellido: "Jones"}]
    
for(let i=0;i<empleados.length;i++){
    localStorage.setItem(`${empleados[i].Apellido}`,`${empleados[i].Nombre}`);
}
console.log(localStorage)

function insertar(){
    var nuevoNombre = document.getElementById("nombre").value;
    var nuevoApellido = document.getElementById("apellido").value;
    localStorage.setItem(`${nuevoApellido}`,`${nuevoNombre}` );
    console.log(localStorage);
}
function modificar(){
    var modifNombre = document.getElementById("nombre2").value;
    var modifApellido = document.getElementById("apellido2").value;
    localStorage.setItem(`${modifApellido}`,`${modifNombre}`);
    console.log(localStorage)

}
