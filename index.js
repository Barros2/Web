const express = require('express')
const app = express()
const conversaoModel = require('./models/conversaoModel')
const jwt = require('jsonwebtoken')
const body = require('body-parser')
const {urlencoded} = require('body-parser')

app.get('/alunos/todos', (req, res) => {
    let alunos = [
        {'nome': 'Joseph', 'sobrenome': 'Barros'},
        {'nome': 'Caroline', 'sobrenome': 'Grangeiro'},
        {'nome': 'Maicon', 'sobrenome': 'Fagundes'},
        {'nome': 'Silvia', 'sobrenome': 'Santos'}
    ]
    res.json(alunos)
})

app.get('/moeda/:valor_real', conversaoModel.conversao)

app.listen(3000, () => {
    console.log('rodando')
})