const numeros = [2, 3, 4, 6];

let forResultado = 0

for (let i = 0; i < numeros.length; i++){
  forResultado += numeros[i]
}

console.log("Resultado da soma com FOR", forResultado)

// Exemplo com while

let whileResultado = 0
let i = 0
while (i < numeros.length){
    whileResultado += numeros[i]
    i++
    console.log(numeros[i])
}

console.log(whileResultado)
