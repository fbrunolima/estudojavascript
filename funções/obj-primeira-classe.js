function fn(cb){
    console.log("executar acao de callback")
    console.log(typeof cb)
    cb()
}

fn(function(){ // passando uma função como parâmetro para a função fn.
    console.log("funcao passada por parametro")
})

function callback() {
    console.log("função passada por parâmetro");
}

const obj = {//constante que está recebendo uma função.
    callback
}
obj.callback(); //execução de uma função de callback a partir de uma constante.

function fn2(n1) {
    return function (n2) {
        return n1 * n2
    }
}

const funcao2 = fn2(10);
const multi = funcao2(2);

function fn3() {
    return function () {
        console.log("função retornada por parâmetro");
    }
}

const funcao3 = fn3()

funcao3()
