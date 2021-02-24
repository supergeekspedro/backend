// OBJETIVO DA AULA E OS ALUNOS CRIAREM
// NOVAS ROTAS DO METODO GET PARA 
// COLOCAR NO SERVER

// - CRIAR NOVAS ROTAS NO METODO GET
// - USAR OS PARAMETROS DE URL
// - USAR A INTERPOLACAO COM O PUG

const express = require("express")
const path = require("path")

const app = express()

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "/views"))


app.get("/", function(req, res) {
    res.render("index")
})


app.get("/profile/:nome", function(req, res) {
    var perfilnome = req.params.nome
    res.render("profile", {nome: perfilnome})
})


app.get("/contact", function(req, res) {
    res.render("contact", {email: "pedro@mail.com", tel: "(11) 99999-9999"})
})


app.listen(3000, function() {
    console.log("Server on | http://localhost:3000")
})