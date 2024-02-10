const caractere = "8";

const regexVogal = /^[a|e|i|o|u]*$/

const regexUpperCase = /^[AEIOU]*$/

const regexNumbers = /^[0-9]*$/

if (caractere.match(regexVogal)) {
    console.log("vogal minuscula", caractere)
} else if (caractere.match(regexUpperCase)) {
    console.log("Vogal Maiscula", caractere)
} else if (caractere.match(regexNumbers)) {
    console.log("Numeros", caractere)
} else{
    console.log("Consoante", caractere)
}