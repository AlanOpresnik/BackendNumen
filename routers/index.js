const express = require('express');
const router = express.Router()
const {indexController} = require('../controllers/indexControllers')
router.get('/api/users', indexController)


module.exports = router