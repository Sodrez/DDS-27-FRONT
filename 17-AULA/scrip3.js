// Uma caixa de tamanho X pode ser colocada dentro de uma caixa de tamanho Y se X < Y. Note, portanto, que uma caixa não cabe dentro de outra do mesmo tamanho. Além disso, duas caixas de tamanhos X e Y podem ser colocadas, lado a lado, dentro de uma caixa de tamanho Z se (X+Y) < Z.

var x = Number (prompt("Caixa 1"))
var y = Number (prompt("Caixa 2"))
var z = Number (prompt("Caixa 3"))

var numero = 0

if(x < y && y < z){
 numero++
}
else if((x+y) < z){
    numero=numero
}
else if(x < y){
    numero++
}
else{
    numero = numero + 3
}

saida = numero

console.log(numero)



