

(function () { //função auto-invocável
    function calcularMedia() {
        let total = 0;
        let qtd = arguments.length;
        for (let i =0; i < qtd; i++) {
            if(typeof arguments[i] !="number"){ // forma de checar o typeof(tipo) do valor passado.
                throw Error("Apenas números");
            } else {
                total += arguments[i];
            }
        }
        return total / qtd;
    }
    let media1 = calcularMedia(2, 9)
    console.log(media1);
})()// função auto-invocável
