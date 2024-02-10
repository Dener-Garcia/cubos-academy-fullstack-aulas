const idade = 22;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if (idade < 12 ||
    idade > 65 ||
    possuiPatologia ||
    altura < 150) {
    console.log("ACESSO NEGADO")
}
else if (ehEstudante ||
    idade < 18) {
    console.log(" VALOR ENTRADA R$ 10.00 REAIS")
}
else {
    console.log("VALOR ENTRADA R$ 20.00 REAIS")
}

