const express = require('express');
const router = express.Router()
const userController = require('../controllers/userController')
const auth = require('../middleware/auth');
const checks = require('../middleware/loginChecks')
const {validarChecks} = require('../middleware/validarChecks')
router.get('/session', userController.PruebaSession)
router.get('/test', auth, userController.test)
router.get('/borrar', userController.borrarSession)
router.post('/login',checks,validarChecks, userController.Login)
router.delete('/logout',userController.Logout) 




module.exports = router