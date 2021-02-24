// OBJETIVO DA AULA E MOSTRAR PARA OS 
// ALUNOS A MELHORIA DE MODULARIZAR O
// PROGRAMA

// - CRIAR UM NOVO DIRETORIO PARA ROTAS
// - USANDO O MODULE EXPORT
// - CRIAR UM MODULO DE ROTAS
// - LINKAR USANDO O COMANDO USE NO APP

const express = require("express")
const path = require("path")

const main = require("./routers/main")

const app = express()

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "/views"))

app.use(main)

app.listen(3000, function() {
    console.log("Server on | http://localhost:3000")
})