//var -> ES5 - cross-browser, funciona em todos os browsers
//let e const vieram da ES2015 - porém não funcionam em tantos browsers assim (antigos)

let teste = 'minha string';
teste = 10;
console.log(teste);

const teste2 = 10; //constante não pode trocar o valor atribuído.
console.log(teste2);

let teste3; //A variável pode ser instânciada sem ser atribuído um valor a ela.