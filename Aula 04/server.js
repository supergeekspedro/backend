// OBJETIVO DA AULA E CRIAR UM SERVIDOR
// BASICO USANDO O MODULO EXPRESS

// - IMPORTACAO COM O COMANDO REQUIRE
// - USO IDEAL PARA CONSTANTES
// - CRIACAO DO APP (CONSTANTE) PARA ROTAS
// - CRIAR UMA ROTA '/' PARA PAGINA INICIAL
// - USAR O RESPONSE PARA ENVIAR HTML
// - CONSOLE PARA LOGAR UMA MENSAGEM
// - COMANDO LISTEN PARA LIGAR O SERVER NA PORTA

const express = require("express")

const app = express()


app.get("/", function(req, res) {
    console.log("Acesso à pagina inicial!")
    res.send("<h1>Hello World!</h1>")
})


app.listen(3000, function() {
    console.log("Server on | http://localhost:3000")
})