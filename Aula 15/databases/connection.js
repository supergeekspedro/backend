const { Client } = require("pg")

const client = new Client({
    host: "localhost",
    port: "5432",
    user: "postgres",
    password: "password",
    database: "testdb"
})

client.connect()

module.exports = client