function pegaTodosOsLivros(callback){
    const livros = [{
        titulo:'Livro 1',
        preco:40
    }]

    callback(livros);
}

module.exports = {
    pegaTodosOsLivros:pegaTodosOsLivros
}