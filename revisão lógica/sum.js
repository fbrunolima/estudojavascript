function sum(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw Error('sum aceita apenas numeros');// tratamento de erros em javascript
    }
}
// bloco try catch.

let soma = ""
try {
    soma = sum(3, "a");
} catch (e) {
    console.log(e.message); // propriedade .message da variável do catch, trás somente a string do erro em que foi tratado caso seja necessário capturar a mensagem.
}