const express = require("express")
const {allInstructors, instructorById, createInstructor} = require("./controllers/instructors")


const routes = express()

routes.get("/instructors", allInstructors) 
routes.get("/instructors/:id", instructorById)
routes.post("/instructors", createInstructor)

module.exports = routes