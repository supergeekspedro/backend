const express = require("express")

const router = express.Router()

router.get("/", function(req, res) {
    res.render("index")
})

router.get("/profile/:nome", function(req, res) {
    var perfilnome = req.params.nome
    res.render("profile", {nome: perfilnome})
})

router.get("/contact", function(req, res) {
    res.render("contact", {email: "pedro@mail.com", tel: "(11) 99999-9999"})
})

module.exports = router