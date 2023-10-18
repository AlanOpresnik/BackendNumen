const {Schema, model} = require('mongoose')

const schema = new Schema({
    nombre: {
        type: 'string',
        required: true
    },
    descripcion: {
        type: 'string',
        required: true
    },
    img: {
        type: 'string',
        required: false
    },
    precio: {
        type: 'number',
        required: true,
    },
    visible: {
        type: Boolean,
        required: true,
    }
    
})

const Productos = model('Product', schema)
module.exports = {Productos}

