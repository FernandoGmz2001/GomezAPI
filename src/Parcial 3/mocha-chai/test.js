let expect = require("chai").expect
let indexFunction = require('./index.js')

describe('Validar si la suma es correcta',function(){
    it('Deberia retornar 3 si la suma es correcta',function(){
        expect(indexFunction(1,2)).to.equal(3)
    })
})