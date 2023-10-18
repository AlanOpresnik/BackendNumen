module.exports = (req, res, next) => {
    if (!req.session.usuario) {
        res.json({
            msg: "no hay usuario",
        })
    } else {
        next()
    }
}