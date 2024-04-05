const teachers = require("../data")

const teacherById = ((require, response) => { 

    const teacherById = teachers.find((teacher) => {
        return teacher.id === Number(require.params.id) 
    })
    response.send(teacherById)
    console.log(require.params, teacherById)
})

module.exports = teacherById