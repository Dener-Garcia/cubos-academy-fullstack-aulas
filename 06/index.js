const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let somaPares = 0

let index = 0

while(index < numeros.length){
  const par = numeros[index] % 2
  if (par === 0){
    somaPares += numeros[index]
  }
  index ++
}

    console.log(somaPares)
