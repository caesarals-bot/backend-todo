const {Router} = require('express')
const { check } = require('express-validator')
const { 
    tasksGet, 
    tasksPut, 
    tasksPost, 
    tasksPatch,
    tasksDelete 
} = require('../controllers/tasks')
const { taskExistsID } = require('../helpers/db-validators')
const { validateFields } = require('../middlewares/validate-Fields ')

const router = Router()

router.get('/', tasksGet)
router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(taskExistsID),
    validateFields
], tasksPut)
router.post('/',[
    check('title', 'El title es obligatorio').not().isEmpty(), 
    check('description', 'La descripción es obligatoria').not().isEmpty(), 
    check('date', 'La fecha es valido').not().isEmpty(),
    validateFields
], tasksPost)
router.patch('/', tasksPatch)
router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(taskExistsID),
    validateFields
], tasksDelete)

module.exports = router