
const Task = require('../models/task')


const taskExistsID = async(id) => {
     const taskId = await Task.findById(id)
     if(!taskId){      
        throw new Error( `el ID: ${id} no existe`) 
     }
 }
module.exports = {
    taskExistsID
}