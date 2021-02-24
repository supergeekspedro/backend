// OBJETIVO DA AULA E ENSINAR AOS ALUNOS
// O CONCEITO DE DIRETORIO ESTATICO E 
// PUBLICO

// - DEFINIR O USO DE UM DIRETORIO ESTATICO
// - CRIAR UM DIRETORIO 'PUBLIC'
// - DESENVOLVER CSS DE PAGINA
// - LINKAR O CSS COM AS PAGINAS

const express = require("express")
const path = require("path")

const main = require("./routers/main")

const app = express()

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "/views"))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static("public"))

app.use(main)

app.listen(3000, function() {
    console.log("Server on | http://localhost:3000")
})