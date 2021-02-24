const client = require("./connection")

async function RegistrarUsuario(nome, email, senha) {

    const query = "INSERT INTO usuarios(nome, email, senha) VALUES($1, $2, $3);"

    client.query(query, [nome, email, senha], function(error, result) {
        if (error) {
            console.error(error)
            return
        }
        console.log("Usuario cadastrado com sucesso!")
    })
}

module.exports = { RegistrarUsuario }