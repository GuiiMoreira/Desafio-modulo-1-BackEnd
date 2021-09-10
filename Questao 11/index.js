function solucao(min, km) {

    let minAdicional = 0
    let kmAdicional = 0
    let totalAPagarEmReais = 0

    if (min > 20) {
        minAdicional = min - 20
        totalAPagarEmReais += minAdicional * 0.3 + 20 * 0.5
    } else {
        totalAPagarEmReais += min * 0.5
    }

    if (km > 10) {
        kmAdicional = km - 10
        totalAPagarEmReais += kmAdicional * 0.5 + 10 * 0.7
    } else {
        totalAPagarEmReais += km * 0.7
    }

    totalAPagarEmCentavos = totalAPagarEmReais * 100

    console.log(totalAPagarEmCentavos)

}

solucao(25, 11.5)