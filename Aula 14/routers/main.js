const express = require("express")
const { RegistrarUsuario } = require("../databases/insert")
const { ObterUsuarioPeloNome } = require("../databases/select")

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
        console.log(result)
        res.render("profile", result)
    })
})


router.get("/contact", function(req, res) {
    res.render("contact", {email: "pedro@mail.com", tel: "(11) 99999-9999"})
})


module.exports = router