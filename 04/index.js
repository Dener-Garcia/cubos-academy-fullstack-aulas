const todosMultiplos = []
var multiplo = 0
const quantosNumerosExistem = 500


for (let i = 0; multiplo < quantosNumerosExistem; i++){

    let resu = multiplo + 3
    multiplo = resu

    todosMultiplos.push(multiplo)
    //console.log( resu, "Dentro do loop", todosMultiplos[i])
}

console.log("Esses sao todos os numeros multiplos de 3 até 500, e existem", todosMultiplos.length, "numeros que sao multiplos de 3")
console.log(todosMultiplos)