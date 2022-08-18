const pessoa = {
    nome : "Felipe",
    idade: 30,
    email: "email@email.com"
}

console.log(pessoa);

for (let prop in pessoa){
    console.log(pessoa[prop])
}

// esse loop seria uma forma de iterar(acessar propriedades do objeto)