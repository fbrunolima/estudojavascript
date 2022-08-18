const produto = {
    nome: "caneta",
    qtd: 10
}

function comprar(n) {
    if(n > produto.qtd) {
        return console.log("quantidade não disponível");
    }
    else {
        produto.qtd -= n;
    }
    console.log(produto.qtd)
}

comprar(11);

comprarArrow = (n) => { //arrow function para iterar com o objeto produto
    if(n > produto.qtd) {
        return console.log("quantidade não disponível");
    }
    else {
        produto.qtd -= n;
    }
    console.log(produto.qtd)
}

comprarArrow(5)