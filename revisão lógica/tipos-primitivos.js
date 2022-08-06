// strings, number (int, floats), boolean
// undefined, null, sumbol(ES6 ou ES2015)

let minhavar_string = 'minha string'; //não pode iniciar a variável com um número
let minhavar2_string = 'minha "string" com aspas duplas/simples';
let minhavar3_string = "minha \"string\" com aspas duplas"; //você pode utilizar a string com aspas duplas adicionado a "\" conforme esta linha.
let minhavar4_string = `minha template literal / template string` // nesse tipo de string você consegue colocar expressões dentro da string.
console.log(minhavar2_string);
console.log(minhavar3_string);

let idade = 30;
let msg = "eu possuo " + idade + " anos"; //concatenação de valores/string
console.log(msg);
let msg2 = `eu possuo ${idade} anos` //concatenação utilizando template string onde você pode colocar uma expressão na string.
console.log(msg2);
console.log(typeof msg2); //vai trazer o tipo da variável

const n1 = 10;
const n2 = 1.1;
console.log(`o tipo de n1 é ${typeof n1} e seu valor é ${n1}, o tipo do n2 é ${typeof n2} e seu valor é ${n2} `)
// mesmo os valores sendo int ou float, o tipo sempre será number em javascript;

const isValid = true;
console.log(`isValid: ${isValid}`);// tipo boleando true ou false;

let varTeste;
console.log(varTeste); //undefined significa que uma variável foi declarada mas não foi atribuído um valor;