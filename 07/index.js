const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

//seu código aqui

const rendimento = totalDeRendimentos < 2855970


if (aposentada) {
    console.log("ISENTA", "aposentada")
} else if (portadoraDeDoenca) {
    console.log("ISENTA", "Portadora de doenca")
} else if (rendimento) {
    console.log("VAZA LEAO!, JA TA DIFICIL SEM VOCE")
} else{
    console.log("PEGA LEAO")
}


// - Pessoas portadores de alguma doença grave
// - Pessoas que já estão aposentadas
// - Para pessoa não esteja isenta, avalia-se seus rendimentos tributáveis ao longo do ano. Na condição em que o total de rendimentos seja **superior** a R$ 28.559,70, a pessoa deve pagar imposto de renda, caso contrário, não.

// - Caso a pessoa não deva pagar IR por pertencer ao grupo de pessoas isentas, imprima na tela **ISENTA**
// - Caso a passoa não deva pagar IR por nao ter o rendimento mínimo necessário, imprima na tela **VAZA LEAO! JA TA DIFICIL SEM VOCE**
// - Caso a pessoa deva pegar IR imprima na tela **PEGA LEAO**
