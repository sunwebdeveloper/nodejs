var http = require('http')

var rotas = [];
rotas['/'] = 'Home !!'
rotas["/produtos"] = 'Produtos !!'

var app = http.createServer(function (request, response){    
    rota = rotas[request.url]
    var statusCode = 404;
    var msg = 'Pagina nao encontrada!!'

    if(rota){
        statusCode = 200;
        msg = rotas[rota]
        return
    }

    response.statusCode = statusCode;
    response.end(msg)
})

app.listen(3000)