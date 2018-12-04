const express = require('express')
const app = express();

app.get('/', function(request, response){
    response.send('Codigo da Home!')    
})

app.get('/produtos', function(request, response) {
    const produtos = ["prod1 - R$ 1,00","prod2 - R$ 0,50"]

    response.send(`
        <ul>
            ${
                produtos.map(function(item){
                    return `<li>${item}</li>`
                }).join('')
            }
        </ul>     
    `)
})
 
const port = 3000
app.listen(port, function(){
    console.log(`
        Servidor subiu com sucesso!
        Acesse por meio de http://localhost:${port}
    `)
})