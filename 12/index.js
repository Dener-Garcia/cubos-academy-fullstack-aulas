
const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

let maxPessoasDentro = 6

while (filaDeDentro.length < maxPessoasDentro){
  const proximo =  filaDeFora.shift([maxPessoasDentro])
  filaDeDentro.push(proximo)
    console.log(proximo, filaDeDentro.length)
    maxPessoasDentro--
}

console.log("Pessoas Dentro Banco",filaDeDentro)
console.log("Pessoas Fora do bacno",filaDeFora)

