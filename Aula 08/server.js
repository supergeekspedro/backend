// OBJETIVO DA AULA E ENSINAR UM NOVO
// METODO DE TRAFEGO DE DADOS, O POST.

// - CRIAR UMA NOVA ROTA PARA FORMULARIO
// - DESENVOLVER UMA PAGINA DE FORMULARIO
// - CRIAR UMA NOVA ROTA COM METODO POST
// - USAR O COMANDO REDIRECT

const express = require("express")
const path = require("path")

const main = require("./routers/main")

const app = express()

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "/views"))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(main)

app.listen(3000, function() {
    console.log("Server on | http://localhost:3000")
})