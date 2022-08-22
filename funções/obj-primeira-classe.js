function fn(cb){
    console.log("executar acao de callback")
    console.log(typeof cb)
    cb()
}

fn(function(){ // passando uma função como parâmetro para a função fn.
    console.log("funcao passada por parametro")
})