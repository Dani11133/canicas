const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
const path = require("path")
//const session = require("express-session")
//body parser pa los datos del formulario
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: false}))
//establece ruta estatica el public
router.use(express.static(__dirname + "../../public"))
//rutas

router.get("/404", (req, res) => {
    console.log(__dirname)
    res.render("404.ejs")
})

router.get("/", (req, res) => {
    res.render("gamecanicas.html")
})

router.get("/canicas", (req, res) => {
    res.render("gamecanicas.html")
})

module.exports = router