const numeros = [2, 3, 4, 6];

// let i = 0

// while (i < numeros.length){
//     console.log(numeros[i])
//     i++

// }

// for (let i = 0; i < numeros.length; i++){
//     console.log(numeros[i])
// }

let total = 0

for ( let index = 0; index < numeros.length; index++){
console.log(numeros[index])
//total = numeros[index] + total
total += numeros[index] // msm que linha acima

 console.log(total, "soma dentro loop")
}
console.log(total, "resultado fora loop")

for (let i of numeros){
    console.log(i)
}

const pala = "alemanha"

for (let i of pala){
    console.log(i)
    if (i == "h"){

        break;
    }
}