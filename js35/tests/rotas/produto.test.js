const request = require('supertest')
const app = require('../../app')
const {expect} = require('chai')

describe('# rotas/produtos.js', ()=>{
    it('Deve retornar uma lista de livros',(done)=>{
        request(app)
            .get('/produtos')
            .set('Accept','application/json')
            .end(function(err, res) {
                if(err) throw err;

                console.log(res.body.livros[0])
                expect(res.body.livros).to.be.an('array')
                expect(res.body.livros[0]).to.have.ownProperty('id')
                expect(res.body.livros[0]).to.have.ownProperty('titulo')
                expect(res.body.livros[0]).to.have.ownProperty('preco')
                expect(res.body.livros[0]).to.have.ownProperty('descricao')
                done()
            })
    }) 

    it('#Deve criar um novo produto',(done)=>{
        request(app)
            .post('/produto')
            .set('Accept','application/json')
            .send({
                titulo : 'Livro de teste',
                preco: 50,
                descricao: 'descricao do livro de teste'
            })
            .expect(201)
            .end(function(err, res){
                if(err) throw err;
            })
            done()
    })
})