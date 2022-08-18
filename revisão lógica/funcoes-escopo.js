let nglobal = "global"; // variável fora do escopo de uma função se torna global, e pode ser acessada por outras funções.

function mostraN() {
    let nglobal = "local"; // variavel dentro da função só está disponível dentro do escopo da função.
    console.log("valor de nglobal: " + nglobal);
}

// quando você instancia uma variável com "let" ela se torna uma variável de escopo de bloco.
// quando você instancia uma variável com "var" ela se torna uma variável de escopo de função.

mostraN()

function fnExt() {
    let n = "n local na função fnExt";

    function fnInt() {
        let n = "n local da função fnInt";
        console.log(n);
    }
    fnInt() // chamada da função interna
    console.log(n);
}

fnExt() // chamada da função externa