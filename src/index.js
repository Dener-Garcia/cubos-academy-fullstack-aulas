const express = require("express")
const app = express()

const searchTeacher = require("./controllers/teacher-search")
const teacherById = require("./controllers/teacherById")

// rota padrao do localhost
app.get("/", (require, response) => {
    response.send("Meu servidor em nodeJS")
})

// criando um middleware indepedente, quando ele termina o codigo continua normalmente
app.use((require, response, next) => {
    console.log("Passei num middleware antes de chegar na rota")
    next()
})

// rota /teacher retorna um objeto
app.get("/teacher", (require, response) => {

const teacherName = [{
    teacher1: "dener",
    teacher2: "Garcia",
    teacher3: "Mara"
}]
    response.send(teacherName)
})

// criando um middleware de rota, quando ele termina o codigo continua normalmente, como boa pratica podemos usar com função tambem
const middlewareRoute = (require, response, next) => {
    console.log("Passei num middleware de rota")
    // o next serve para executar a proxima acao apos o middlware, no caso a funcao teacherById
    next()
}

// rota /teacher/:"any" com parametro de rota, serve para pegar o valor apos o /: da barra de endereco do browser, tambem adicionei um middleware como argumento na rota.
app.get("/teacher/:id", middlewareRoute, teacherById )

// rota /search-teacher com parametros de consulta, sao enviados pelo browser e recuperados dentro do require
app.get("/search-teacher", searchTeacher)


app.listen(3300, console.log("servidor rodando na porta 3300"))