// 1 1 2 3 5 8 13 
// 0 1 2 3 4 5 6

function fibo(pos){
  if(pos<=1){
    return 1
  }else{
    return fibo(pos-1)+fibo(pos-2)
  }
}
console.log(fibo(6))


//const fibonacci = n => (n < 2) ? resultado = 1 : resultado = fibonacci(n - 1) + fibonacci(n - 2);