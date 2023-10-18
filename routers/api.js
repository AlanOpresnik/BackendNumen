const express = require('express');
const router = express.Router()
const apiController = require('../controllers/apiController')
const {check} = require("express-validator")
const {validarChecks} = require("../middleware/validarChecks")
router.get('/api/lista', apiController.getApi)
router.post('/api/crear',[check("nombre","el nombre es obligatorio").not().isEmpty(),validarChecks], apiController.postApi)
router.put('/api/editar/:id/', apiController.putApi)
router.delete('/api/delete/:id/', apiController.deleteApi)
router.get('/api/pokemons',apiController.getPokemons)


module.exports = router