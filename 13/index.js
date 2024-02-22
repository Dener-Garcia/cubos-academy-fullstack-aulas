const disjuntores = [false, false, true, false, false, true, false, false];

let i = 0

while(i < disjuntores.length){
    
    if (disjuntores[i]){
        console.log( "Os disjuntores, ", i, "tem seu estado em:",disjuntores[i])
    }
    i++
}