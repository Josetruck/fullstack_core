const num = [1, 1, 2, 3, 5, 8, 13, 21, 34]
function sum(pos){
   if(pos<1){ return num[0]
} else{
    return num[pos]+ sum(pos-1)
}
}
console.log(sum(num.length-1))