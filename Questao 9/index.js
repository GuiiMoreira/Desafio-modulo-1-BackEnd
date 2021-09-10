function solucao(precos) {

    function totalApagar(valores) {
        const totalApagar = valores.reduce((acc, preco) => acc + preco)
        console.log(totalApagar)
    }

    if (precos.length <= 2) {
        totalApagar(precos)
    } else {
        const menorPreco = precos.reduce((acc, preco) => acc < preco ? acc : preco)
        const indiceMenorPreco = precos.indexOf(menorPreco)
        precos.splice(indiceMenorPreco, 1, menorPreco / 2)
        totalApagar(precos)
    }

}

const precoDasRoupas = [150, 100, 200]

solucao(precoDasRoupas)