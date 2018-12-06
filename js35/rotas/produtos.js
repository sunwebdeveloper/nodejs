const ProdutosDAO = require('../infra/ProdutosDAO')

module.exports = function(app){
    app.get('/produtos', function(request, response) {
        const produtosDAO = new ProdutosDAO()
        produtosDAO.pegaTodosOsLivros(function(livros){
            const produtos = livros; 
            response.render('produtos/lista', {
                produtosQueVemDaControler:produtos
            })
        })        
    })

    app.get('/produtos/form', function(request, response){
        response.render('produtos/form')
    });

    app.post('/produto', function(request, response){
        const novoLivro = request.body;

        const produtosDAO = new ProdutosDAO()
        produtosDAO.
            gravaUmNovoLivro(novoLivro)
            .then(function(idDoNovoLivro){
                response.redirect('/produtos')
            })
    });

    app.get('/produto/:id', function(request, response) {
        const idDoLivro = request.params.id
        
        const produtosDAO = new ProdutosDAO()
        produtosDAO.pegaUmLivroPorId(idDoLivro, function(livro){
            response.send(livro)
        });
    })
}
