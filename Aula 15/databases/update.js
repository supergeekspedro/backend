const client = require("./connection")

async function AlterarSenha(nome, novasenha) {

    const query = "UPDATE usuarios SET senha = $2 WHERE nome = $1;"

    client.query(query, [nome, novasenha], function(error, result){
        if (error) {
            console.error(error)
            return
        }
        console.log("Senha alterada com sucesso!")
    })
}

async function AlterarEmail(nome, novoemail) {

    const query = "UPDATE usuarios SET email = $2 WHERE nome = $1;"

    client.query(query, [nome, novoemail], function(error, result){
        if (error) {
            console.error(error)
            return
        }
        console.log("Email alterado com sucesso!")
    })
}

module.exports = { AlterarSenha, AlterarEmail }