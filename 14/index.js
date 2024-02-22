const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

let numA = 0
let numB = 0

let iA = 0
let iB = 0

while (arrayA.length > iA) {
    numA = arrayA[iA]
    numB = arrayB[iB]


    if (numA < numB){
        console.log(numA)
    }else{
        console.log(numB)
    }
    iA++
    iB++


}


