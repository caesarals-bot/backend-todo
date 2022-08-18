const {Schema, model} = require('mongoose')

const TaskSchema = Schema({
    title:{
        type: String,
        require: [true, 'El nombre es obligatorio']
    },
    description:{
        type: String,
        require: [true, 'La descripción es obligatorio']
    },
    date:{
        type: Date,
        require: [true, 'La fecha es obligatorio']
    },
    status: {
        type: Boolean,
        default: true
    },
})


module.exports = model('Task', TaskSchema)