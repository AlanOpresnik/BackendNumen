const {User} = require('../models/user')
const bcrypt = require('bcryptjs');

class UserController {
   PruebaSession(req,res){
    const user = {
        id: "ywgdywgdygg8273y",
        name: "alan",
    }
    req.session.user = user
    res.cookie('primerCookie',user.id,{
        maxAge: 120000
    })
    res.json(req.session)
   }
   test(req, res) {
    res.json({session: req.session,
         cookie:req.cookies.primerCookie})
   }
   borrarSession(req, res) {
    req.session.destroy()
    res.clearCookie('primerCookie')
    res.json({
       msg:"session eliminada"
        })
   }
   async Login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (user == null || !bcrypt.compareSync(req.body.password, user.password)) {
            res.status(401).json({
                msg: "La contraseña o el correo electrónico son inválidos"
            });
        } else {
            const usuario = {
                id: user.id,
                nombre: user.name,
            }
            req.session.usuario = usuario;

            if (req.body.remember) {
                res.cookie('session', req.session.usuario, { maxAge: 12000 });
            }

            res.json({
                msg: "Sesión creada"
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Error en el servidor"
        });
    }

   }
   Logout(req,res){
    req.session.destroy(),
    res.clearCookie("session")
    res.json({msg: "session  cerrada"})
   }
}

module.exports = new UserController