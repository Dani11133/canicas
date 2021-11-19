const express = require("express")
const router = require("./src/rutas") //rutas
const app = express()
const ejs = require("ejs")
//const session = require("express-session")
const path = require("path")
//las rutas y direcciones de la pagina
app.use(router)
//error 404
app.use((req, res) => {
    res.sendFile(__dirname + "/public/views/404.html")
})
// archivos estaticos

console.log(__dirname)

// view engine setup
app.set('views', path.join(__dirname, '/public/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.listen(3000, () => {
    console.log("Servidor a la espera de conecciones")
})