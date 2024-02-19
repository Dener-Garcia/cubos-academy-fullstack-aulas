const original = [1, 4, 12, 21, 53, 88, 112];
const newArray = []

const arrayFinal = original.map((x) => x % 10)

let index = 0

while (index < original.length){
  const par = original[index] % 2
  if (par === 0){
    newArray.push(original[index])
  }
  index ++
}

console.log(newArray)

