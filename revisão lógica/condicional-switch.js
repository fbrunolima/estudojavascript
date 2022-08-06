let diaSemana = 6;
if(diaSemana === 0) {
    console.log("hoje é Domingo");
} else if(diaSemana === 1){
    console.log("hoje é segunda");
} else if(diaSemana === 2){
    console.log("hoje é terça");
} else if(diaSemana === 3){
    console.log("hoje é quarta");
} else if(diaSemana === 4){
    console.log("hoje é quinta");
} else if(diaSemana === 5 ){
    console.log("hoje é sexta");
} else {
    console.log("hoje é sábado");
}
//aqui seria utilizando a condicional if

//nesse caso abaixo seria utilizando o switch

let dia = ""

switch (diaSemana) {
    case 0 : 
    dia = "segunda"
    break; // é essencial utilizar o break após a condição ser atendida para não continuar rodando o código.
    case 1 : 
    dia = "terça"
    break;
    case 2 : 
    dia = "quarta"
    break;
    case 3 : 
    dia = "quinta"
    break;
    case 4 : 
    dia = "sexta"
    break;
    case 5 : 
    dia = "sábado"
    break;
    default: 
    dia = "domingo"
    break;
}
console.log(dia);