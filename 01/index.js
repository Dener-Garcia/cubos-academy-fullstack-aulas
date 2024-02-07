const jogada1 = "pedra"
const jogada2 = "tesoura"

//seu código aqui

if (jogada1 == jogada2) {
    console.log("deu empate jogue denovo")
    return
}

if (jogada1 == "pedra" && jogada2 == "tesoura" ||
    jogada1 == "papel" && jogada2 == "pedra" ||
    jogada1 == "tesoura" && jogada2 == "papel" ) {
    console.log("jogada 1 vence", jogada1)
} else{
    console.log("jogada 2 vence", jogada2)
}