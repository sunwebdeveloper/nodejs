const express = require('express')
const app = express();

const bodyParser = require('body-parser')

app.set('view engine','ejs')
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({ extended: false }))

const rotaProdutos = require('./rotas/produtos')(app)
const rotaHome = require('./rotas/home')(app)

module.exports = app