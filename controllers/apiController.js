const { Productos } = require("../models/productos");
const  axios = require("axios")

class apiController {
  async getApi(req, res) {
    const list = await Productos.find();
    res.status(200).json(list);
  }

  async postApi(req, res) {
    try {
      const nuevoProducto = new Productos(req.body);
      await nuevoProducto.save();
      res.status(201).json(nuevoProducto);
    } catch (error) {
      res.status(400).json(error);
    }
  }
  async putApi(req, res) {
    const { id } = req.params;

    const { nombre, descripcion, img, precio, ...resto } = req.body;
    try {
        const producto = await Productos.findByIdAndUpdate(id, {
            $set: { resto, nombre, descripcion, img, precio },
          });
      
          res.json({
            msg: "Producto actualizadao correctamente.",
            producto,
          });
    } catch (error) {
        console.log(error);
    }
  }
 async deleteApi(req, res) {
    try {
        const { id } = req.params;
        const { visible, ...resto } = req.body;
        const producto = await Productos.findByIdAndUpdate(id,{
            visible:false
        })
        res.json({
            msg: "producto eliminado correctamente"
        })
    } catch (error) {
        console.log(error);
    }
  }
  async getPokemons(req, res) {
    try {
      const {data} = await axios("https://pokeapi.co/api/v2/pokemon/")
      res.json(data)
    } catch (error) {
      res.status(404).json({
        msg: "no se pudo encontrar pokemones"
      })
    }
  }
}

module.exports = new apiController();
