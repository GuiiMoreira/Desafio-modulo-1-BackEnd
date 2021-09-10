function solucao(jogadores) {
    const quantidadeDe1 = jogadores.filter(jogada => jogada.jogada === 1)
    const quantidadeDe0 = jogadores.filter(jogada => jogada.jogada === 0)


    if (quantidadeDe1.length === 1) {
        const indexVencedor = jogadores.findIndex(jogador => jogador.jogada === 1)
        const vencedor = jogadores[indexVencedor].nome
        console.log(vencedor)
    } else if (quantidadeDe0.length === 1) {
        const indexVencedor = jogadores.findIndex(jogador => jogador.jogada === 0)
        const vencedor = jogadores[indexVencedor].nome
        console.log(vencedor)
    } else {
        console.log("NINGUEM")
    }

}

const resultadoDasJogadas = [
    {
        "nome": "Herman",
        "jogada": 1
    },
    {
        "nome": "Rhodes",
        "jogada": 0
    },
    {
        "nome": "Beach",
        "jogada": 0
    },
    {
        "nome": "Laurel",
        "jogada": 0
    },
    {
        "nome": "Beatrice",
        "jogada": 0
    },
    {
        "nome": "Alison",
        "jogada": 0
    },
    {
        "nome": "Saundra",
        "jogada": 0
    },
    {
        "nome": "Klein",
        "jogada": 0
    }
]

solucao(resultadoDasJogadas)