
// CARDÁPIO

let produtos = [
    {
        nome: "X-Burguer",
        preco: 15.00,
        categoria: "Lanche"
    },
    {
        nome: "Batata Frita",
        preco: 10.00,
        categoria: "Acompanhamento"
    },
    {
        nome: "Refrigerante",
        preco: 8.00,
        categoria: "Bebida"
    },
    {
        nome: "Milk-shake",
        preco: 12.00,
        categoria: "Bebida"
    },
    {
        nome: "Sorvete",
        preco: 7.00,
        categoria: "Sobremesa"
    }
];

// ARMAZENAR OS PEDIDOS

let pedidos = [];

// LISTAR O MENU

function listarMenu(callback) {

    console.log("=-=-=-=-=-= CARDÁPIO =-=-=-=-=-=");

    for (let i = 0; i < produtos.length; i++) {

        console.log(
            (i + 1) + " - " +
            produtos[i].nome +
            " / Categoria: " +
            produtos[i].categoria +
            " / R$ " +
            produtos[i].preco.toFixed(2)
        );
    }

    console.log("=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=");

    if (callback) {
        callback();
    }
}


// FUNÇÃO PARA CADASTRAR PEDIDO


function cadastrarPedido(nomeProduto, quantidade, callback) {

    // procura o produto no array
    let produtoEncontrado = null;

    for (let i = 0; i < produtos.length; i++) {

        if (produtos[i].nome.toLowerCase() === nomeProduto.toLowerCase()) {

            produtoEncontrado = produtos[i];
            break;
        }
    }


    // verifica se o produto existe
    if (produtoEncontrado === null) {

        console.log("produto não encontrado no cardápio");
        return;
    }

    // calcula o valor total
    let valorTotal = produtoEncontrado.preco * quantidade;


    let pedido = {
        produto: produtoEncontrado.nome,
        quantidade: quantidade,
        precoUnitario: produtoEncontrado.preco,
        valorTotal: valorTotal
    };


    pedidos.push(pedido);


    console.log("\npedido cadastrado com sucesso");


    if (callback) {
        callback();
    }
}


function listarPedidos() {

    console.log("\n=-=-=-=-=-= PEDIDOS =-=-=-=-=-=");

    if (pedidos.length === 0) {

        console.log("nenhum pedido cadastrado");

        return;
    }

    for (let i = 0; i < pedidos.length; i++) {

        console.log("\nPedido " + (i + 1));

        console.log("Produto: " + pedidos[i].produto);

        console.log("Quantidade: " + pedidos[i].quantidade);

        console.log(
            "Preço: R$ " +
            pedidos[i].precoUnitario.toFixed(2)
        );

        console.log(
            "Valor total: R$ " +
            pedidos[i].valorTotal.toFixed(2)
        );
    }

    console.log("=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=");
}

listarMenu(function () {

    let nomeProduto = prompt("Digite o nome do produto:");

    let quantidade = Number(
        prompt("Digite a quantidade:")
    );

    cadastrarPedido(
        nomeProduto,
        quantidade,
        listarPedidos
    );
});