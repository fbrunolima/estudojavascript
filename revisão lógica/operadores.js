//operadores aritiméticos +, -, *, /, % (** potência mas não funciona em todos os navegadores).
// + soma
// - subtração
// * multiplicação
// / divisão
// % resto da divisão
// ** potênciação.

//operadores aritiméticos
let n1 = 10
let n2 = 5
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);
console.log(3 ** 2);

console.log("---------------------------------------");

//operadores de atribuição
let n3 = 20;
// = (igual) é um operador de atribuição.

//INCREMENTO E DECREMENTO
n3 += 15; //+= pega o valor atual e soma com o valor atribuído pelo =;
console.log(n3)
n3 -= 15; //+= pega o valor atual e subtrai com o valor atribuído pelo =;
console.log(n3)
n3 *= 15; //+= pega o valor atual e multiplica com o valor atribuído pelo =;
console.log(n3)
n3 /= 15; //+= pega o valor atual e divide com o valor atribuído pelo =;
console.log(n3)
n3 %= 15; //+= pega o valor atual e pega o resto da divisão do valor atribuído pelo =;
console.log(n3)
//n3 **= 15; //+= pega o valor atual e exponecia com o  do valor atribuído pelo =;
console.log(n3)
n3++;
n3--;

//OPERADORES DE COMPARAÇÃO
/*
igualdadede valor ==
igualdade de valor e tipo ===
>,<, <=, >=
!= valores diferentes
!== valores e tipos diferentes
*/
console.log(n1, n2, n3)

let n5 = '10';
console.log(n1 == n5); // == compara apenas o valor, se é igual e retorna 'true'
console.log(n1 === n5); /* ===compara valor e tipo, se forem do mesmo tipo e valor retorna 'true, caso seja o mesmo valor mas de tipos 
diferentes, retorna false*/

//OPERADORES LÓGICOS
//AND(&&), OR(||), NOT(!)

//OPERADORES CONDICIONAIS
//if(se)
//else(senão)
//else if (senao se)

//OPERADOR TERNÁRIO

let idade = 18
let paisPresentes = false;
let comprouBilhete = true;
const podeViajar = idade >= 18 || paisPresentes && comprouBilhete;
console.log(`Pode viajar ${podeViajar}`);

/*let msgMaiorIdade = "";
if (idade >= 18) {
    msgMaiorIdade = 'É maior de 18 anos';
} else {
    msgMaiorIdade = 'É menor de idade';
}*/

let msgMaiorIdade = (idade >= 18) ? 'É maior de 18 anos' : 'É menor de idade'; //operador ternário, funciona como se fosse um if, else sendo que simplificado.
// se a primeira condição (idade >= 18) ? for verdadeira, vai receber um valor que for atribuído após ?, se não depois do : o valor atribuído será o que for
//setado após o ":" .

if(!comprouBilhete) {
    console.log('não comprou o bilhete');
} else {
    console.log(msgMaiorIdade)
}




