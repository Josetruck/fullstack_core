class Hexagono {
    constructor(min,max){
        this.min=min;
        this.max=max;
    }
    pinta(){
        var output = "";
        var j = 0;
        var i = 0;
        var k = 0;
        var dif = this.max - this.min;
        for (j = 0; j < dif/2+1; j++) {
            for (i = 0; i < (dif / 2)-j; i++) {
                output += " ";
            }
            for(k=0;k<this.min+j*2;k++){
            output += "+";      
            }
            output += "\n";
        }
        for(var a=1;a<=dif/2;a++){
            for(var b=0;b<a;b++){
                output+=" ";
            }
            for(var c=0;c<this.max-a*2;c++){
                output += "+";      
                }
            output += "\n"
        }
        console.log(output);
    }
}
var n = new Hexagono(2,10);
n.pinta()