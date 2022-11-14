
console.log(dni + tel + email)


function check(){
    const regExp_dni = new RegExp(/[0-9]{8,8}[a-z]$/i);
    const regExp_tel = new RegExp(/^\(\+34\)-[0-9]{9,9}$/);
    const regExp_email = new RegExp(/[a-z]*@[a-z]*.[a-z]{3,3}$/i);
var dni= document.getElementById("dni").value;
var tel= document.getElementById("tel").value;
var email= document.getElementById("email").value;

    console.log(dni + tel + email)
var numero = dni-dni[dni.length-1];
var resto = numero % 23;
var letras = "TRWAGMYFPDXBNJZSQVHLCKET";
var encontrado = letras.charAt(resto);
var letra_dni = "";
  letra_dni = dni[dni.length - 1];
  letra_dni = letra_dni.toUpperCase();
  if(letra_dni == encontrado){
    alert("Validacion DNI: "+regExp_dni.test(dni));
  }else{alert("El dni no es correcto.")}
    alert("Validacion Telefono: "+regExp_tel.test(tel));
    alert("Validacion Email: "+regExp_email.test(email));
}