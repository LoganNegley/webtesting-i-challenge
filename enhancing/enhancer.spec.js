const enhancer = require('./enhancer.js');

// Test for restore durability
describe('enhancer.repair()', () =>{
    it('should restore durability to 100', () =>{
        expect(enhancer.repair({name: "knife", durability:10, enhancement: 10}))
        .toEqual({
            name:"knife",
            durability:100,
            enhancement:10
        })
        expect(enhancer.repair({name:'boat', durability: 99, enhancement: 20}))
        .toEqual({
            name:'boat',
            durability:100,
            enhancement:20
        })
        expect(enhancer.repair({name: 'gun', durability: 1, enhancement: 15}))
        .toEqual({
            name:'gun',
            durability:100,
            enhancement: 15
        })
        
    })
})

// Test for enhancement success
describe('enhancer.succeed()', () =>{
    it('should increase enhancement by 1 and no more than 20', () =>{
        expect(enhancer.succeed({name: "knife", durability:10, enhancement: 10}))
        .toEqual({
            name:"knife",
            durability:10,
            enhancement:11
        })
        expect(enhancer.succeed({name:'boat', durability: 99, enhancement: 18}))
        .toEqual({
            name:'boat',
            durability:99,
            enhancement:19
        })
        expect(enhancer.succeed({name: 'gun', durability: 1, enhancement: 15}))
        .toEqual({
            name:'gun',
            durability:1,
            enhancement: 16
        })
        
    })
})