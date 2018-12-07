const express = require('express')
const app = express();

const bodyParser = require('body-parser')

app.set('view engine','ejs')
app.use(express.static('./public'))

app.use(bodyParser.json({ extended: false }))
app.use(bodyParser.urlencoded({ extended: false }))

const rotaProdutos = require('./rotas/produtos')(app)
const rotaHome = require('./rotas/home')(app)

app.use((request,response)=>{
    response.status(404)
    response.format({
        html: ()=>{
            response.send('Página 404!!!')
        },
        json: ()=> {
            response.send({
                message: 'Página não encontrada!'
            })
        }
    })
})

module.exports = app