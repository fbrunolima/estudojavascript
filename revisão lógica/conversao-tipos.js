let n1 = 10;
let n2 = '10';

//parseInt, parseInt, Number() são três formas para transformar em um número.

console.log(n1 + parseInt(n2));//conversão de string para inteiro utilizando parseInt

let varfloat = 10.1234;
console.log(parseInt(varfloat)); //conversão de float para inteiro, ele remove as casas decimais.

let floatvar = 10.1234;
let stringfloat = "10.1234";
console.log(floatvar + parseFloat(stringfloat)); //conversão de string para float, podendo também converter um inteiro para float.

//parseInt e parseFloat só vão conseguir converter um valor caso o primeiro caractere seja um número.

//decimais 0 - 9
//hexadecimal 0 - F -> (15)

n1 = 20;
//n1 = n1 + ""; //essa forma até converte o número para uma string, mas não é recomendado utilizar dessa forma.
//n1 = n1.toString(); //converte um valor para string, nesse caso converteu um número para uma string.
n1 = String(n1);//convertendo o valor para string utilizando o construtor String()
console.log(n1, typeof n1);