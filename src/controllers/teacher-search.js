const teachers = require("../data")

const searchTeacher = ((require, response) => {

        let searchFound = []
    
        if(require.query.stack){
    
            console.log("recuperando parametros de url:", require.query)
            
            searchFound = teachers.filter((teacher) => {
                return teacher.stack === require.query.stack
            })
    
            response.send(searchFound)
    
        }
    }
    )

    module.exports = searchTeacher