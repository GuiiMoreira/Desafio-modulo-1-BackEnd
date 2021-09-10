function solucao(numeros) {
    const somaDosNumeros = numeros.reduce((acc, item) => acc + item)
    if (somaDosNumeros > numeros) {
        console.log(somaDosNumeros)
    } else {
        const posicao = somaDosNumeros % numeros.length
        if (posicao === 0) {
            console.log(numeros.length)
        } else {
            console.log(posicao)
        }
    }
}

const numeroDeCadaUm = [2, 1, 3, 4]

solucao(numeroDeCadaUm)