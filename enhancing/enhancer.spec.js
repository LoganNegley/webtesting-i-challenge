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
describe('enhancer.success()', () =>{
    it('should increase enhancement by 1', () =>{
        expect(enhancer.success({name: "knife", durability:10, enhancement: 10}))
        .toBe({
            name:"knife",
            durability:100,
            enhancement:11
        })
        expect(enhancer.success({name:'boat', durability: 99, enhancement: 20}))
        .toBe({
            name:'boat',
            durability:100,
            enhancement:21
        })
        expect(enhancer.success({name: 'gun', durability: 1, enhancement: 15}))
        .toBe({
            name:'gun',
            durability:100,
            enhancement: 16
        })
        
    })
})