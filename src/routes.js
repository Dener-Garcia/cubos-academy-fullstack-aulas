const express = require("express")
const {allInstructors, instructorById, createInstructor, updateInstructor, deleteInstructor} = require("./controllers/instructors")


const routes = express()

routes.get("/instructors", allInstructors) 
routes.get("/instructors/:id", instructorById)
routes.post("/instructors", createInstructor)
routes.put("/instructors", updateInstructor)
routes.delete("/instructors", deleteInstructor)

module.exports = routes