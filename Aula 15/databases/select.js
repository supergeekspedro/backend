const client = require("./connection")

async function ObterUsuarioPeloNome(nome) {

    const query = "SELECT * FROM usuarios WHERE nome = $1;"

    const result = await client.query(query, [nome])

    return result.rows[0]
}

module.exports = { ObterUsuarioPeloNome }