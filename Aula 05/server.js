// OBJETIVO DA AULA E OS ALUNOS DESENVOLVEREM
// UMA PAGINA USANDO O PUG PARA SER RENDERIZADA
// NA ROTA '/'

// - CRIAR DEFINICOES NO APP
// - ALTERAR A FERRAMENTA DE VISUALIZACAO
// - ALTERAR A PAGINA DE VISUALIZACAO 
// - USAR O MODULO PATH
// - DESENVOLVER UMA PAGINA

const express = require("express")
const path = require("path")

const app = express()

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "/views"))


app.get("/", function(req, res) {
    res.render("index")
})


app.listen(3000, function() {
    console.log("Server on | http://localhost:3000")
})