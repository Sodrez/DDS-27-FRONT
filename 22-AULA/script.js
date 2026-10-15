// Console - Terminal do naavegador
console.log(console);

//window
//window.alert()
//window.prompt()
//console.log(window)

//Documento - DOM
console.log(document)
console.log(document.head)
console.log(document.body);

// seção 1

//seleciona elementos pela tag
var titulos = document.
getElementsByTagName("h1")
console.log(titulos);

// seleciona elementos pela class
var paragrafos = document.getElementsByClassName("para")
console.log(paragrafos);

// seleciona elemento por id
var especifico = document.getElementById("p3")
console.log(especifico)

// alteração de estilos
// pego pelo id
especifico.style.backgroundColor = "green"
especifico.style.color = "yellow"

// pela class
paragrafos[0].style.backgroundColor = "pink"

// pela tag
titulos[2].style.backgroundColor = "orange"

// secao 2
// função ativada, mas criada pelo java
function cliquei(){
    console.log("SAAAAAAAAAAIIIIII")
}

// funcao ativada, mas creiada pelo java
//document.getElementById("btnCliqueDuplo").addEventListener("dblclick", () => {

//var contador = 0;

//document.getElementById("btnCliqueDuplo").addEventListener("dblclick", () => {
//    contador++;
//
  //  console.log("clicou" + contador);
//});
//})

// botao clicavel, que altera varios
document.getElementById("shazam").addEventListener("click", () =>{
    for(var i = 0; i < titulos.length; i++){
        titulos[i].style.backgroundColor = "red"
        titulos[i].style.color = "yellow"
        titulos[i].style.fontSize = "100px"
    }
})

// uso o this
// função ativada, e o parametro veio com o this
function quemFoi(elementoQueChamou){
    console.log(elementoQueChamou);
    
}


// SEÇÃO 3
document.getElementById("criaTexto").addEventListener("click", () => {

    // innertext - textcontent- altera o texto do elemento
    document.getElementById("textoCriado").innerText = "Falei que ia mudar, toma ai "
})
// altera o html
document.getElementById("criaHtml").addEventListener("click", () => {

    // innerhtml - altera o elemento
    document.getElementById("vazia").innerHTML += "<h2> AHAHAHAHAHHAHAHA <h2>"


})
