const { Router } = require('express')

const userController = require('./controller/UserController')

const router = Router()

router.post('/create-user', userController.store)
router.get('/list-user', userController.index)
router.get('/listOnde-user/:id', userController.listOne)
router.put('/upadate-user/:id', userController.update)
router.delete('/delete-user/:id', userController.delete)

module.exports = router