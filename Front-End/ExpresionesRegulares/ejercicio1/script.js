const cadena    = '3($ABCj';
const regExp    = new RegExp(/^[13579]\(\$[A-Z]{1,3}[a-z]$/);
const resultado = regExp.test(cadena);

console.log(resultado);