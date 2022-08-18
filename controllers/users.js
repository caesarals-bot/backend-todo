const { response } = require("express")

const usersGet = (req, res = response) => {
    const {q, nombre = 'No name', apiKey} = req.query
    res.json({
        msg: 'Get API Desde controlador',
        q, 
        nombre, 
        apiKey
    })
}
const usersPost = (req, res) => {
    const {nombre, edad} = req.body
    res.status(201).json({
        msg: 'Post API. controller',
        nombre, edad
    })
}
const usersPut = (req, res = response) => {
    const id = req.params.id
    res.json({
        msg: 'Put API Desde controlador',
        id
    })
}
const usersPatch = (req, res = response) => {
    res.json({
        msg: 'Patch API Desde controlador'
    })
}
const usersDelete = (req, res = response) => {
    res.json({
        msg: 'Delete API Desde controlador'
    })
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete,
}