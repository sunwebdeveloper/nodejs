const produtosDAO = require('../infra/ProdutosDAO')

module.exports = function(app){
    app.get('/produtos', function(request, response) {
        console.log('1')
        produtosDAO.pegaTodosOsLivros(function(livros){
            console.log('2')
            const produtos = livros; 
            response.render('produtos/lista', {
                produtosQueVemDaControler:produtos
            })
        })        
    })

    app.get('/produtos/form', function(request, response){
        response.render('produtos/form')
    });

    app.post('/produtos', function(request, response){
        console.log('body-parser: ',request.body)
        response.send('tentou cadastrar um produto ne?')
    });

    app.get('/produto/:id', function(request, response) {
        const idDoLivro = request.params.id
        produtosDAO.pegaUmLivroPorId(idDoLivro, function(livro){
            response.send(livro)
        });
    })
}
