// OBJETIVO DESSA AULA E DESENVOLVER
// A INSERCAO E SELECAO DOS DADOS
// DE USUARIO DO SERVIDOR

// - NOVO MODULO DE INSERCAO
// - NOVO MODULO DE SELECAO
// - CONCEITO DE FUNCAO ASSINCRONA
// - DESENVOLVER A FUNCAO REGISTRAR USUARIO
// - DESENVOLVER A FUNCAO OBTER USUARIO
// - ALTERAR A ROTA GET PROFILE
// - ALTERAR A ROTA POST REGISTER
// - ATUALIZAR A PAGINA PROFILE

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