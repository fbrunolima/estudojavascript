const pessoa = [{ //array de objetos com chave e valor dentro deste array
    nome: "Felipe",
    idade: 30
},{
    nome: "Bruno",
    idade: 30
}
]

const pessoa1 = {
    nome: "Felipe",
    idade: 30
}

const pessoas = [pessoa, pessoa1];// essa seria uma forma de montar um array de objetos, onde vc instancia uma array, e dentro dela instancia um objeto. 

pessoa1.idade = 31
console.log(pessoas)