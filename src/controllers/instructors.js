const {instructors} = require("../dataSource")

const allInstructors = (req, res) => {
    res.status(201,"Resposta do servidor").json(instructors)
}

const instructorById = (req, res) => {
    const {id} = req.params

    const instructor = instructors.find((el) => {
        return el.id === Number(id)
    })

    if (!instructor){
        return res.status(400).json({messagem : "esse instrutor nao existe"})
    } 
        return res.status(201).json(instructor)
}

const createInstructor = (req, res) => {
    const {name, mail, status} = req.body
    console.log("teste nova rota")
    console.log(name, mail, status)
}

module.exports = {
    allInstructors,
    instructorById,
    createInstructor
}