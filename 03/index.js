const numeros = [54, 22, 14, 87, 10, 284];

const numeroDesejado = 1

for (let i = 0; i < numeros.length; i++ ){
    if (numeros[i] === numeroDesejado){
        console.log("Existe no array o numero desejado", numeroDesejado, "ele se encontra no indice", i)
    } else {
        console.log("O numero desejado", numeroDesejado, "nao foi encontrado no array")
    }
}

