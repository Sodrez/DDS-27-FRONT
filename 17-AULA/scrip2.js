// DESVIOS CONDICIONAIS

// IF = SE

var estaVivo = true

// Primeira comparação
if(estaVivo){
    console.log("Parabéns, que legal");    
}
// Segunda comparação. Só vem para cá se a primeria der errado
else if(estaVivo == undefined){
    console.log("Mano, sei como cê ta.")
}
// Último caso, só entra aqui se todos acima derem errado
else{
    console.log("Morreu, mas passa bem")
}

// SWITCH/CASE
var camisa = "Marrom"

switch(camisa){
    case "Preto":
        console.log("Parabéns, acaba de ganhar um vinil da Sabrina Carpente");
    break
    case "Branco":
        console.log("Você ganhou, um body splash da Virgínia");
    case "Vermelha":
        console.log("VOCÊ GANHOU UMA FERRARI, 3 PORTAS, COM TETO SOLAR E ESCADA");
    break
    default:
        console.log("Puxa, não foi dessa vez que você conseguiu");
    break
}

// PROMPT - INTERAGE COM O USUÁRIO
// prompt("Qual é o seu pet favorito do mundo dos filmes:")

// var preferido = prompt("Qual é o seu pet favorito do mundo dos filmes:")

// console.log("Seu PET preferido é:", preferido)