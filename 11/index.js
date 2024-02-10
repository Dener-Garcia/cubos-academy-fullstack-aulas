//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 100000;

let valorParcela = 0

if (rendaMensalEmCentavos > 200000 && totalJaPagoPeloAluno < 1800000 ){
    valorParcela = rendaMensalEmCentavos * 0.18
    console.log("Valor da Parcela é R$",valorParcela/100)

} else if(totalJaPagoPeloAluno = 1800000) {
    console.log("Parabéns seu curso esta quitado")
} else if(mesesDecorridos > 60) {
    console.log("Parabéns seu curso esta quitado pois ja se passaram 60 meses")
}
