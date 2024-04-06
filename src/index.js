const express = require("express")
const routesGet = require("./routes")

const app = express()
// diz para node que as rotas recebem arquivos em .json
app.use(express.json())

app.use(routesGet)


app.listen(3000, console.log("server run at 3000 port"))