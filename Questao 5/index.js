function solucao(carta) {
    const tabelaTruco = {
        "Q": "J",
        "J": "K",
        "K": "A",
        "A": "2",
        "2": "3",
        "3": "Q"
    }

    console.log(tabelaTruco[carta])
}

solucao("Q")