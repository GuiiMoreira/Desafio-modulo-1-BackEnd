function solucao(lista) {

    const totalAcumulado = lista.reduce((acc, item) => acc + item)

    console.log(totalAcumulado)

}

const numeros = [1, 2, 3, 4]

solucao(numeros)