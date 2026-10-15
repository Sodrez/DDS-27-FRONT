console.log("SHAZAM");

var musicas = ["Pera aí", "Se...", "Segredos"]
var cantores = ["Cirilo", "Djavan", "Frejat"]

for(var i = 0; i < musicas.length;i++){
    console.log(musicas[i], "-", cantores[i]);
}

//objeto
var filme1 = {
    // "chave": "valor"
    titulo: "Rei leão",
    genero: "Animação",
    anoLan: 1996
}

console.log(filme1);

// acessando uma chave especifica
console.log(filme1.titulo);

console.log(`O filme: ${filme1.titulo} foi lançado em ${filme1.anoLan}`);

console.log(`genero: ${filme1["genero"]}`);

var intervalo = {
    titulo: "Baralho",
    genero: "Truco",
    Horario: "20:00",
    comida: "Maravilha"
}

console.log(`O ${intervalo.titulo} acontece as ${intervalo.Horario}, nós jogamos ${intervalo.genero} e comemos ${intervalo.comida} `);

//objeto vazio
var garrafa = {}

console.log(garrafa);

// criar as propriedades
garrafa.cor = "Bege"
garrafa.preco = 99
garrafa.tamanho = "710ml"
garrafa["tampada"] = false
console.log(garrafa);

garrafa.cor = "Vermelho"
console.log(garrafa);

// usuario cria uma nova propriedade e depois que ele criar vai dar um valor a essa nova propriedade

//var garrafapropriedade = console.log(prompt("coloca uma nova propriedade para adicionar na garrafa:"));
//garrafa[garrafapropriedade] = prompt("valor:")

//console.log(garrafa[garrafapropriedade])

var leao = {
    // propriedades
    nome: "simba",
    temPelo: true,
    especie: "domestico",
    peso: 60,
    //metodos
    andar: function(){
        console.log("estou andando, confia")
    },
    falar: () =>{
        console.log("MIAAAAAAAAAAAAAAU")
    },

}

console.log(leao)
// mostra o texto do metodo
console.log(leão.andar);
// execitar o metodo do leao
leao.falar()