const { validationResult } = require('express-validator')

const validateFields = ( req, res, next ) => {
    const errors = validationResult(req)
    if( !errors.isEmpty() ){
        return res.status(400).json(errors)
    }

    next()//si todo esta bien deja seguir al siguiente midd
}

module.exports = {
    validateFields 
}