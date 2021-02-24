// OBJETIVO DESSA AULA E DESENVOLVER
// A CONEXAO DO SERVIDOR COM O 
// BANCO DE DADOS POSTGRES

// - FAZER INSTALACAO DO MODULO PG
// - CRIAR UM NOVO DIRETORIO
// - DESENVOLVER O MODULO DE CONEXAO
// - MODULARIZAR A CONEXAO

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