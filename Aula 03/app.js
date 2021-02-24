// OBJETIVO DA AULA E APRESENTAR AOS ALUNOS
// A SINTAXE DA LINGUAGEM DE PROGRAMACAO
// JAVASCRIPT.

// - MOSTRAR OS PRINCIPAIS TIPOS DE DADOS
// - DECLARACAO DE VARIAVEL
// - CRIACAO DE FUNCOES
// - RETORNO DE FUNCOES
// - USO DA CHAMADA DE FUNCOES

var nome = "Pedro"
var sobrenome = 'Santos'

var nomeCompleto = `${nome} ${sobrenome}`

const idade = 20

// -------------------------------------------------------

function somar(a, b) {

    var resultado = a + b

    console.log(resultado)
}

// -------------------------------------------------------

function somar(a, b) {
    return a + b
}

console.log( somar(1 + 2) )

// -------------------------------------------------------

// - IMPORTACAO COM O COMANDO REQUIRE
// - USO IDEAL PARA CONSTANTES
// - FUNCIONAMENTO DO REQUEST E RESPONSE
// - COMPOSICAO DE RESPONSE HTTP (HEADER, BODY)
// - EXPLICACAO DO MIME TYPES (TEXT/PLAIN -> TEXT/HTML)
// - EXPLICACAO DO STATUS CODE

// https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview

// GET  '/'  HTTP/1.1
// Host: http://localhost:3000/
// Accept-Language: pt-BR

// HTTP/1.1  200  OK
// Date: Thu, 17 Dez 2020 10:37:12 GMT +3
// Server: NodeJs
// Content-Type: text/html
//
// <h1> FALA CACHORRO </h1> 

const http = require('http')

const server = http.createServer(function(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Olá Mundo')
})

server.listen(3000, function() {
    console.log("Servidor funcionando!")
})