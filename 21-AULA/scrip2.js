function opcoes(){

    console.log("as opções são:", this.tamanhos.toString())
}

var produto1 = {
    nome:"Coca-Cola",
    categoria: "bebidas",
    quantidade: 30,
    tamanho: ["200ml", "lata", "600ml", "3L", "KS"],
    // cria um metodo interno
    descricao: function(){
        //this - referencia o proprio objeto
        console.log(`A ${this.nome} é da categoria ${this.categoria}`)
    },
    // usa uma função exeterna como seu metodo
    verTamanhos : opcoes
}
produto1.descricao()
produto1.verTamanhos()


produto1.descrição()

var produto2 = {
    nome:"Coxinha",
    categoria: "Salgados",
    quantidade: 15,
    tamanho: ["P", "M", "G"],
    descrição: function(){
        console.log(`A ${this.nome} é da categoria ${this.categoria}`)
},
verTamanhos : opcoes
}

produto2.descrição()
produto2.verTamanhos()
// metendo o logo (por causa do lucas)
var aluno = {
    nome: "Cristiano Ronaldo",
    anoEscolar: "7º",
    turma: "C",
    notas: [6,7,8],
    media: function() {
        n1 = this.notas[0]
        n2 = this.notas[1]
        n3 = this.notas[2]

        return((n1 + n2 + n3) / 3)
    }
}

console.log(aluno.media())