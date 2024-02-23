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

//console.log(usuarios.nome[1].push("prop1"), nova)

for (let userData of usuarios){

    if (userData.idade > 17) {
        userData.maior_idade = true;

    }
}

console.log(usuarios)