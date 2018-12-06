const connectionFactory = require('./ConnectionFactory')

class ProdutosDAO{    
    constructor(){
        this.connection = connectionFactory();
    }

    pegaTodosOsLivros(callback){
        this.connection.query('SELECT * FROM livros', (errs, results) => {            
            this.connection.end();
            const produtos = results;
            callback(produtos);
        });
    }

    pegaUmLivroPorId(idDoLivro, callback){
        this.connection.query(`SELECT * FROM livros WHERE id=${idDoLivro}`, (errs, results) =>{   
            this.connection.end(); 
            const livro = results; 
            callback(livro)
        })
    }
    
    gravaUmNovoLivro(livro){
        return new Promise((resolve, reject)=>{
            this.connection.query(`
                INSERT INTO livros (titulo,preco,descricao) values 
                ('${livro.titulo}', ${livro.preco}, '${livro.descricao}')        
            `, (errs, results)=>{
                this.connection.end()
                resolve(results.insertId) 
            })        
        })    
    }
}

module.exports = ProdutosDAO
