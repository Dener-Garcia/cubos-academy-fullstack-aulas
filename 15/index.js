const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

let i = 0

while (original.length > i){
    const numPar = original[i] % 2
    if (numPar == 0){
        pares.push(original[i])
        console.log(original[i], "numeros pares")
    } else{
        impares.push(original[i])
        console.log(original[i], "numeros impar")
    }
    i++
}

console.log(pares)
console.log(impares)