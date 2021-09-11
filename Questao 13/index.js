const inputArray = input.trim().split("\n")
const coordenadasString = []

for (let i = 1; i < inputArray.length; i++) {
    coordenadasString.push(inputArray[i].split(" "))
}

const coordenadas = []
for (let item of coordenadasString) {
    coordenadas.push({ x: parseFloat(item[0], 10), y: parseFloat(item[1], 10) })
}

let maiorDistancia = 0

while (coordenadas.length !== 1 && coordenadas.length > 0) {
    for (let i = 1; i < coordenadas.length; i++) {
        let distancia = 0
        distancia = Math.sqrt(Math.pow((coordenadas[i].x - coordenadas[0].x), 2) + Math.pow((coordenadas[i].y - coordenadas[0].y), 2))

        if (distancia > maiorDistancia) {
            maiorDistancia = distancia
        }
    }
    coordenadas.shift()
}


console.log(maiorDistancia)