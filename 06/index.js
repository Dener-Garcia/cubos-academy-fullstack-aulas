const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

const jovens = []
const adulto = []

for (let i = 0; i < usuarios.length; i++) {
    console.log(usuarios[i])
    if (usuarios[i].idade < 18){
        jovens.push(usuarios[i])
    }
    else{
        adulto.push(usuarios[i])
    }

}

console.log("esses sao os jovens:", jovens)
console.log("esses sao os adultos:",adulto)