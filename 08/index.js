const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]


for (let i = 0; i < usuarios.length; i++){
    if (usuarios[i].pets.length < 1){
        console.log(usuarios[i].nome, "Nao tem pets :(")
    } 
    else if(usuarios[i].pets.length == 1 ){
        console.log(usuarios[i].nome, "Tem", usuarios[i].pets.length, ":-)")
    }
    else{
        console.log(usuarios[i].nome, "Tem varios pets :o", usuarios[i].pets.length)
    }
}
