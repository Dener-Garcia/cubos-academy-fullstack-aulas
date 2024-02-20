const numeros = [3, 24, 1, 8, 11, 7, 215];

let i = 0

let bigNumber = 0

while(i < numeros.length){
    
    if (bigNumber < numeros[i]){

        bigNumber = numeros[i]
    }

    i++
}
console.log("O maior numero do array é", bigNumber)



