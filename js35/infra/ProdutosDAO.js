const connectionFactory = require('./ConnectionFactory')

function pegaTodosOsLivros(callback){
    console.log('3')
    const connection = connectionFactory();
    connection.query('SELECT * FROM livros', function(errs, results){            
        console.log('4')
        connection.end();
        const produtos = results;
        callback(produtos);
    });
}

function pegaUmLivroPorId(idDoLivro, callback){
    const connection = connectionFactory();
    connection.query(`SELECT * FROM livros WHERE id=${idDoLivro}`, function(errs, results){   
        connection.end();
        const livro = results;
        callback(livro)
    })
}

module.exports = {
    pegaTodosOsLivros:pegaTodosOsLivros,
    pegaUmLivroPorId
}