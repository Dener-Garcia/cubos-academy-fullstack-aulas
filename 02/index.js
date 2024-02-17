const letras = [ "A", "a", "B", "C", "E", "e"];

letraDesejada = "a"
let i = 0
let quantidade = 0

while (i < letras.length){

    if (letras[i] === letraDesejada.toLowerCase() ){
        console.log("achei a letra minuscula:", letraDesejada)
        quantidade++
        i++
    }else if (letras[i] === letraDesejada.toUpperCase()){
        console.log("achei a letra maiuscula:", letraDesejada.toUpperCase())
        quantidade++
        i++
    } 
}

if (quantidade == 0 ){
  console.log("Essa letra", letraDesejada, "nao esta no array")
} else{
  console.log("encontrei", quantidade, "letras:", letraDesejada, "na sua busca" )
}
