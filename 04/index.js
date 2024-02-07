const ladoA = 5;
const ladoB = 5;

//seu código aqui

if (ladoA == ladoB && ladoA == 0) {
    console.log("essa pedra é uma bucha de", "Branco", ladoA, ladoB)
}
else if (ladoA == ladoB && ladoA == 1) {
    console.log("essa pedra é uma bucha de", "AS", ladoA, ladoB)
}


else if (ladoA == ladoB && ladoA == 2) {
    console.log("essa pedra é uma bucha de", "Duque", ladoA, ladoB)
}

else if (ladoA == ladoB && ladoA == 3) {
    console.log("essa pedra é uma bucha de", "Terno", ladoA, ladoB)
}

else if (ladoA == ladoB && ladoA == 4) {
    console.log("essa pedra é uma bucha de", "Quadra", ladoA, ladoB)
}

else if (ladoA == ladoB && ladoA == 5) {
    console.log("essa pedra é uma bucha de", "Quina", ladoA, ladoB)
}


else if (ladoA == ladoB && ladoA == 6) {
    console.log("essa pedra é uma bucha de", "Sena", ladoA, ladoB)
}

else {
    console.log("Sua pedra não é uma bucha", ladoA, ladoB)
}