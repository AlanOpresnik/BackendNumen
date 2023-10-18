const {check} = require('express-validator')

const checks = [
    check("email")
        .notEmpty().withMessage("el campo email es obligatorio")
        .isEmail().withMessage("el campo email debe ser un Email valido"),

        check("password")
        .notEmpty().withMessage("el campo password es obligatorio")
        .isString()

]

module.exports = checks