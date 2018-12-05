module.exports = function(app){
    const connectionFactory = require('../infra/ConnectionFactory')
    const produtosDAO = require('../infra/ProdutosDAO')

    app.get('/produtos', function(request, response) {
        const connection = connectionFactory();
        
        produtosDAO.pegaTodosOsLivros(function(livros){
            const produtos = livros; 
            response.render('produtos', {
                produtosQueVemDaControler:produtos
            })
        })
        
//        connection.query('SELECT * FROM livros', function(errs, results){            
//           const produtos = results; 
//            response.render('produtos', {
//                produtosQueVemDaControler:produtos
//            })
//        });
        connection.end();
    })

    app.get('/produto/:id', function(request, response) {
        const id = request.params.id
        
        const connection = connectionFactory();
        connection.query(`SELECT * FROM livros WHERE id=${id}`, function(errs, results){            
            const produtos = results; 
            response.render('produtos', {
                produtosQueVemDaControler:produtos
            })
        });
        connection.end();
    })
}
