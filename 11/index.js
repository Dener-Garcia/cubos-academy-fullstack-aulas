
const original = [5, 7, 13, 17, 26, 34, 118, 245];

 let maiorDiferenca = 0;
    
    for (let i = 0; i < original.length; i++) {
        for (let j = i + 1; j < original.length; j++) {

            const diferenca = original[i] - original[j];
            if (diferenca > maiorDiferenca) {
                maiorDiferenca = diferenca;
            } else if (-diferenca > maiorDiferenca) {
                maiorDiferenca =- diferenca;
            }
        }
    }

console.log(maiorDiferenca)

