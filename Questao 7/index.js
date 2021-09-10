function solucao(texto) {
    const textoTratado = texto.trim()
    const palavras = textoTratado.split(" ")
    const palavrasTratadas = palavras.filter(x => x !== " " && x !== "")
    const totalDePalavras = palavrasTratadas.length
    console.log(totalDePalavras)
}

function processData(input) {
    solucao(input)
}


solucao(' Vamos fazer   um teste pra isso   ')