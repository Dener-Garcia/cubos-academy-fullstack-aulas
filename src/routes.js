const express = require("express")

const routes = express()

routes.get("/", (req, res)=> {
    res.send("server run baby")
})

module.exports = routes