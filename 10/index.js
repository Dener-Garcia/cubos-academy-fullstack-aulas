// clientes
const patricia = { nome: "Patricia", carrinho: [] }
const carlos = { nome: "Carlos", carrinho: [] }
const renato = { nome: "Renato", carrinho: [] }
const jose = { nome: "José", carrinho: [] }
const roberto = { nome: "Roberto", carrinho: [] }

// produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }

// {
//     item: {
//         nome: 'TV Samsung 4K',
//         valorEmCentavos: 129900
//     },
//     quantidade: 1
// }

jose.carrinho.push({tv, quantidade : 1},  {caboUsb, quantidade : 2}, {webcam, quantidade : 1})

carlos.carrinho.push({notebook, quantidade : 2})

patricia.carrinho.push({teclado, quantidade : 1}, {caboUsb, quantidade : 2}, {carregador, quantidade : 1}, {mouse, quantidade : 1}, {monitor, quantidade : 1})

renato.carrinho.push({webcam, quantidade : 5})

roberto.carrinho.push({webcam, quantidade : 1}, {caboUsb, quantidade : 2}, {monitor, quantidade : 1})


console.log("jose", jose.carrinho)
console.log("Carlos", carlos.carrinho)
console.log("Patricia", patricia.carrinho)
console.log("Renato", renato.carrinho)
console.log("Roberto", roberto.carrinho)



