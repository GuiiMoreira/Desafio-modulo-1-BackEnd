function processData(input) {
    let restoDaPalavra = []
    let comparador = []
    let novaPalavra = ""

    for (let i = 1; i < input.length; i++) {
        restoDaPalavra.push(input[i])
        comparador.push(input[i].toUpperCase())
    }

    if (input[0] === input[0].toLowerCase() && restoDaPalavra.toString() === comparador.toString()) {

        novaPalavra += input[0].toUpperCase()
        for (let i = 1; i < input.length; i++) {
            novaPalavra += input[i].toLowerCase()
        }
        console.log(novaPalavra)
    } else if (input[0] === input[0].toUpperCase() && restoDaPalavra.toString() === comparador.toString()) {
        novaPalavra += input[0].toLowerCase()
        for (let i = 1; i < input.length; i++) {
            novaPalavra += input[i].toLowerCase()
        }
        console.log(novaPalavra)
    } else {
        console.log(input)
    }
}

processData('cAPS')