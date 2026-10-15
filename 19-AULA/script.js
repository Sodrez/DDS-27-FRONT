console.log("Manda um oi ai para eu ver...")

// funções
//só executa

function teste(){
    console.log("ESTOU FUNCIONANDO")
}

// Executando a função
teste()

// com retorno
function soma(){
    return 6 + 7
}

console.log(soma());

// Mostra apenas o texto da função, não executa
console.log(soma)


// com parametros
function teste2(parametro){
    console.log("O paramatro enviado foi", parametro)
}

// executando
teste2("arroz")

var nome = "claudio"
teste2(nome)

// faz ações e retorna resultados
function media(n1, n2){
    let resultado = (n1 + n2) / 2
    return resultado
}
 // guarda resiçtadp em variavel, pra depois utilizar
var final = media(9, 7)
console.log("Resultado da média:", final)

// Função anônimo
var mensagem = function(){
    console.log("Oi, meu chapa");
}

//mostra o texto da função
console.log(mensagem)

// Executa a função, coloco os ()
mensagem()

// Apenas guarda o texto da função
mensagem

// arrow function - função de seta
// forma mais comum de escrever funções no javascript
const multiplicar = (x,y) => {
    let result, primeiro = x, segundo = y
    result = primeiro * segundo
    return x * y
}

console.log("O resultado da multiplicação é:", multiplicar(7, 4));

// mais menor ainda
// quando só tem uma linha de retorno, o return pode ser omitido também

const dobro = numero => numero *2

console.log("O dobro é:", dobro(42))

// FAÇA UM PEDIDO DE UM NUMERO AO USUÁRIO, E UTILIZE O VALOR INFORMADO PARA PASSAR A UMA FUNÇÃO DE SETA, E RETORNAR a divisão por dois daquele valor. e mostre no console o resultado

var num1 = Number (prompt("bota o numero ai agora por favor"))
var num2 = Number (prompt("bota o numero ai agora por favor"))

function media(num1, num2){
    let resultado = (num1 + num2) / 2
    return resultado
}
alert("A média é: " + media(num1, num2));