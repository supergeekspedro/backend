const express = require("express")

const { RegistrarUsuario } = require("../databases/insert")
const { ObterUsuarioPeloNome } = require("../databases/select")
const { DeletarUsuario } = require("../databases/delete")
const { AlterarSenha, AlterarEmail } = require("../databases/update")

const router = express.Router()


router.get("/", function(req, res) {
    res.render("index")
})


router.get("/register", function(req, res) {
    res.render("register")
})

router.post("/register", function(req, res) {
    const form = req.body
    console.log(form)
    RegistrarUsuario(form.nome, form.email, form.senha)
    res.redirect("/register")
})


router.get("/profile/:nome", function(req, res) {
    var perfil = req.params.nome
    ObterUsuarioPeloNome(perfil).then(function(result) {
        res.render("profile", result)
    })
})


router.post("/deletar", function(req, res) {
    const perfil = req.body
    console.log(perfil)
    DeletarUsuario(perfil.nome, perfil.senha)
    res.redirect("/")
})


router.post("/senha", function(req, res) {
    const perfil = req.body
    console.log(perfil)
    AlterarSenha(perfil.nome, perfil.novasenha)
    res.redirect("back")
})


router.post("/email", function(req, res) {
    const perfil = req.body
    console.log(perfil)
    AlterarEmail(perfil.nome, perfil.novaemail)
    res.redirect("back")
})


router.get("/contact", function(req, res) {
    res.render("contact", {email: "pedro@mail.com", tel: "(11) 99999-9999"})
})


module.exports = router