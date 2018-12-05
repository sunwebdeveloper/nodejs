const express = require('express')
const app = express();

app.set('view engine','ejs')

const rotaProdutos = require('./rotas/produtos')(app)
const rotaHome = require('./rotas/home')(app)

module.exports = app