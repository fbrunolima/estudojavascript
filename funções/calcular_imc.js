/*let imc =  calcularIMC(71, 1.78);*/

/*
function calcularIMC(peso, altura){
    if (peso === undefined || altura === undefined){
        throw Error("Precisa de dois parâmetros para execução da função");
    }

    return peso / (altura * altura);
}

function classificaIMC(imc){
    if (imc <= 16.9) {
        return console.log("muito abaixo do peso")
    }else if(imc < 18.4) {
       return console.log("abaixo do peso")
    }else if(imc < 24.9){
        return console.log("normal")
    }else if(imc < 29.9) {
        return console.log("acima do peso")
    }else if(imc < 34.9) {
        return console.log("obesidade 1")
    }else if(imc <= 40) {
        return console.log("obesidade 2")
    }else {
        return console.log("obesidade 3")
    }
}

classificaIMC(imc)
*/


//lembrar que switch case compara valores exatos.

//exercício de imc com callback.

function classificaIMCCallback(imc){

    imc();

    console.log("chamou callback");
    if (imc <= 16.9) {
        return console.log("muito abaixo do peso")
    }else if(imc < 18.4) {
        return console.log("abaixo do peso")
    }else if(imc < 24.9){
        return console.log("normal")
    }else if(imc < 29.9) {
        return console.log("acima do peso")
    }else if(imc < 34.9) {
        return console.log("obesidade 1")
    }else if(imc <= 40) {
        return console.log("obesidade 2")
    }else {
        return console.log("obesidade 3")
    }
}

classificaIMCCallback(function (peso = 71, altura = 1.78){
    if (peso === undefined || altura === undefined){
        throw Error("Precisa de dois parâmetros para execução da função");
    }

    return peso / (altura * altura);
});


