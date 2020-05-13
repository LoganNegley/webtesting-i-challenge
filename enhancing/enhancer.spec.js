const enhancer = require('./enhancer.js');

describe('enhancer.repair()', () =>{
    it('should restore durability to 100', () =>{
        expect(enhancer.repair({
            name: "knife",
            durability: 50,
            enhancement: 10
        }))
        .toBe({
            name:"knife",
            durability:100,
            enhancement:10
        })
    })
})