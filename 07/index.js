const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const nomeA = []

for (let i = 0; i < nomes.length; i++){

    let startWitha = nomes[i].startsWith("a")
    let startWithA = nomes[i].startsWith("A")

    if (startWithA || startWitha){
        nomeA.push(nomes[i])
    }
}

console.log("esses são os nomes que contem a letra desejada", nomeA)
