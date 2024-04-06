let {instructors} = require("../dataSource")

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

    let newId =+ instructors.length + 11

    let newInstructor = {
        id : newId,
        name : name,
        mail : mail,
        status : status ?? false
    }

    if (!name || !mail ){
        return res.status(400).send("Dados incompletos")
    }
    else{
        instructors.push(newInstructor)
    }

    res.status(200).send("Dados Cadastrados")
}

const updateInstructor = (req, res) => {
    const {id, name, mail, status} = req.body

    const updateAInstructor = instructors.find((instructor) => {
        console.log(id, "veio da req")
    return instructor.id === id
    })

    updateAInstructor.name = name
    updateAInstructor.mail = mail
    updateAInstructor.status = status

    return res.status(203).send("Dados cadastrados")

}

const deleteInstructor = (req, res) => {
    const {id} = req.body

    console.log(instructors)

    const deleteAInstructor = instructors.find((el) => {
      return el.id === id
    })

     instructors = instructors.filter((el) => {
        return el.id != deleteAInstructor.id
    })

    res.send("usuario deletado")
}

module.exports = {
    allInstructors,
    instructorById,
    createInstructor,
    updateInstructor,
    deleteInstructor
}