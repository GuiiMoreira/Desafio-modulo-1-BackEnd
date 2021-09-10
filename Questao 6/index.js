function solucao(lista) {

    const maioresDeIdade = lista.filter(idade => idade >= 18)

    if (maioresDeIdade.length != 0) {
        const menorIdade = maioresDeIdade.reduce((menor, proxIdade) => menor < proxIdade ? menor : proxIdade)
        console.log(menorIdade)

    } else {
        console.log("CRESCA E APARECA")
    }

}

const idades = [10, 15, 23, 38, 45, 18, 17]

solucao(idades)