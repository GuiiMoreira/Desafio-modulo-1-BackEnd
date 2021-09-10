function solucao(lista) {
    const mediaDoAcumuladoPorDia = lista.reduce((acc, item) => acc + item) / lista.length

    console.log(mediaDoAcumuladoPorDia)

}

const numeros = [2, 3, 4]

solucao(numeros)