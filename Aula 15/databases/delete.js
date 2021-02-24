const client = require("./connection")

async function DeletarUsuario(nome) {

    const query = "DELETE FROM usuarios WHERE nome = $1;"

    client.query(query, [nome], function(error, result){

        if (error) {
            console.error(error)
            return
        }
        console.log("Usuario deletado com sucesso :C")
    })
}

module.exports = { DeletarUsuario }