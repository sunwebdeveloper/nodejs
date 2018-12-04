const express = require('express')
const app = express();

app.set('view engine','ejs')
app.get('/', function(request, response){
    response.send('Codigo da Home!')    
})

app.get('/produtos', function(request, response) {
    const produtos = [
        {titulo:'Livro de Java', preco:'40,00'},
        {titulo:'Livro de DevOps', preco:'50,00'}
    ]
     
    response.render('produtos', {
        produtosQueVemDaControler:produtos
    })
})

module.exports = app