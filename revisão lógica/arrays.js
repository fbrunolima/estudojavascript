const arr = new Array();

const arr2 = new Array(true, "Daniel", 28, new Array(2, 4, 10));

arr[0] = "Daniel" // dessa forma está sendo atribuído o valor "Daniel" para o índice 0 da array: "arr";
arr[1] = 40 // dessa forma está sendo atribuído o valor "40" para o índice 1 da array: "arr";

console.log(arr);

//em javascript você pode colocar qualquer tipo de valor dentro de um array, até mesmo instanciar um novo array dentro do array atual.

console.log(arr2[3][2]);

arr.length // a propriedade .length dizer qual o tamanho da array (quantos índices ela possui)

const arr3 = []; //forma literal de declarar array.

arr.push("Adicionar valor a um array com push"); // esta é uma forma diferente de adicionar um valor a um array

