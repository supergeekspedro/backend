const express = require("express")

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
    res.redirect("/register")
})


router.get("/profile/:nome", function(req, res) {
    var perfil = req.params.nome
    console.log(perfil)
    res.render("profile", {nome: perfil})
})


router.get("/contact", function(req, res) {
    res.render("contact", {email: "pedro@mail.com", tel: "(11) 99999-9999"})
})


module.exports = router