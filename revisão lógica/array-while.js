// criar um array com números randômicos não repetidos.
// Math.random() essa função sempre vai retornar um número randômico, e pode ser multiplicado. Ex: Math.random() * 50.

function generateRandomNumber() {
    return parseInt(Math.random() * 50);
}

let arr = []
while (arr.length < 20) {

    let randomNumber = generateRandomNumber()

    if (arr.indexOf(randomNumber) < 0){// a função indexOf vai checar se aquele valor já existe no array, se existir ele vai retornar o índice em que aquele valor
        //foi encontrado, caso não encontre o valor retornado é -1
        arr.push(randomNumber)
    }
}

console.log(arr);