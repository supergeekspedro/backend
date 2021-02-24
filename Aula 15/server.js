// OBJETIVO DESSA AULA E DESENVOLVER
// A EXCLUSAO E ATUALIZACAO DOS DADOS
// DE USUARIO DO SERVIDOR

// - NOVO MODULO DE EXCLUSAO
// - NOVO MODULO DE ATUALIZACAO
// - DESENVOLVER A FUNCAO ALTERAR SENHA
// - DESENVOLVER A FUNCAO ALTERAR EMAIL
// - DESENVOLVER A FUNCAO DELETAR USUARIO
// - CRIAR FORM NO PROFILE

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