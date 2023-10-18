const indexController =  (req, res) => {
    res.json({
        nombre: "alan",
        edad: "16",
    })
}

module.exports = {indexController}