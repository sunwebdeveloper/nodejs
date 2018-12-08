const express = require('express')
const app = express();
const consing = require('consign')
const cors = require('cors')
const bodyParser = require('body-parser')

app.set('view engine','ejs')
app.use(cors())
app.use(express.static('./public'))

app.use(bodyParser.json({ extended: false }))
app.use(bodyParser.urlencoded({ extended: false }))

consing()
    .include('./rotas')
    .into(app)
//const rotaProdutos = require('./rotas/produtos')(app)
//const rotaHome = require('./rotas/home')(app)

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

//mario.souto@caelum.com.br
//@omariosouto

//DICAS
//https://code.lengstorf.com/deploy-nodejs-ssl-digitalocean/

//Github
//Procurar pelo id da turma: node7964