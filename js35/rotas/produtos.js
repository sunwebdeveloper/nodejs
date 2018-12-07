const ProdutosDAO = require('../infra/ProdutosDAO')

module.exports = function(app){
    app.get('/produtos', function(request, response) {
        response.setHeader('Access-Control-Allow-Origin','*')

        const produtosDAO = new ProdutosDAO()
        produtosDAO.pegaTodosOsLivros(function(livros){
            const produtos = livros; 
            response.format({
                html: function(){
                    response.render('produtos/lista', {
                        produtosQueVemDaControler:produtos
                    })
                },
                json: function(){
                    response.send({
                        livros:produtos
                    })
                }
            })            
        })        
    })

    app.get('/produtos/form', function(request, response){
        response.render('produtos/form')
    });

    app.post('/produto', function(request, response){
        const Joi = require('joi')
        const livroSchema = Joi.object().keys({
            titulo: Joi.string().required(),
            preco: Joi.number().required(),
            descricao: Joi.string(),
        })

        Joi.validate(request.body, livroSchema, {abortEarly: false})
        .then((valor)=>{
            const Livro = {
                titulo : request.body.titulo,
                preco : request.body.preco,
                descricao : request.body.descricao,
            }

            const produtosDAO = new ProdutosDAO()
            produtosDAO.
                gravaUmNovoLivro(Livro)
                .then(function(idDoNovoLivro){
                    response.redirect('/produtos')
                })
        })
        .catch((error) => {
            response.status(400);
            response.format({
                html: () => {
                    response.render('produtos/form', {errors: error.details})  
                },
                json: () => {
                    response.send({
                        message: 'Erro ao inserir produto'
                    })
                }
            })
                    
        }) 
    })


    app.get('/produto/:id', function(request, response) {
        const idDoLivro = request.params.id
        
        const produtosDAO = new ProdutosDAO()
        produtosDAO.pegaUmLivroPorId(idDoLivro, function(livro){
            const livroPesquisado = livro
            console.log("pesquisa: "+livroPesquisado)
            response.format({
                html: function(){
                    response.send(`Livro ${livroPesquisado.titulo} localizado com sucesso.`)
                },
                json: function(){
                    response.send({
                        livro:livroPesquisado
                    })
                }
            })
        })
    })
}
