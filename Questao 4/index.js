function solucao(min, max, valores) {
    const valoresAutorizados = valores.filter(valor => valor >= min && valor <= max)

    console.log(valoresAutorizados)
}

const valores = [1, 2, 3, 4, 5, 6, 7, 8]

solucao(2, 5, valores)