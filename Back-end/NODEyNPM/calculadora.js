/* function suma(n1,n2){
    return n1+n2
}
function resta(n1,n2){
    return n1-n2
}
function mult(n1,n2){
    return n1*n2
}

const calculadora={
    suma,
    resta,
    mult
}

module.exports = calculadora;
 */
module.exports=function div(a,b){
    if(b != 0){
        return a / b;
    }else {
        return "No se puede dividir por 0";
    }
}
