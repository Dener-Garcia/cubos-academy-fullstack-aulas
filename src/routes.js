const express = require("express")
const {allInstructors, instructorById} = require("./controllers/instructors")


const routes = express()

routes.get("/instructors", allInstructors) 
routes.get("/instructor/:id", instructorById)

module.exports = routes