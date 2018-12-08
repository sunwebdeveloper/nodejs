const soma = require('../../modulos/soma')
const chai = require('chai')
const expected = chai.expect
/* if(soma(1,1) === 2){
    console.log('A soma de 1 + 1 deve ser 2')
} else {
    console.log('Deu ruim') 
} */

describe('# soma.js', () => {
    it('1 + 1 tem que ser igual a 2', () =>{
        expected(soma(1,1)).to.be.equal(2)
    }),
    it('2 + 2 tem que ser igual a 4', ()=>{
        expected(soma(2,2)).to.be.equal(4)
    })
})