const senhasArray = input.trim().split("\n")

let senhaCorreta = senhasArray[0]
let senhaDigitada = senhasArray[1]
let verificador = 0

for (let i = 0; i < senhaCorreta.length; i++) {

    let index = senhaDigitada.indexOf(senhaCorreta[i])

    if (index === -1) {
        verificador++
    }

    senhaDigitada = senhaDigitada.slice(index + 1)
}

console.log(verificador)
if (verificador === 0) {
    console.log('SIM')
} else {
    console.log('NAO')
}
