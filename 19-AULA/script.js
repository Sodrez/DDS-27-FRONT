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

