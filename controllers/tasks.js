const { response } = require("express")
const task = require("../models/task")

const Task = require('../models/task')

const tasksGet = async(req, res = response) => {
    const tasks = await Task.find( {status:true} )

    const total = await task.countDocuments({status:true})
    res.json({
        total,
        tasks
    })
}
const tasksPost = async(req, res) => {
    const body = req.body
    const task = new Task(body)
    await task.save()

    res.json({
        msg: 'Post API. controller',
        task
    })
}

const tasksPut = async(req, res = response) => {
    const {id} = req.params
    const {...resto} = req.body

    const task = await Task.findByIdAndUpdate(id, resto)
    res.json(task)
}
const tasksPatch = (req, res = response) => {
    res.json({
        msg: 'Patch API Desde controlador'
    })
}
const tasksDelete = async(req, res = response) => {
    const {id} = req.params

    const task = await Task.findByIdAndUpdate(id, {status:false} )
    res.json(task)
}

module.exports = {
    tasksGet,
    tasksPost,
    tasksPut,
    tasksPatch,
    tasksDelete,
}