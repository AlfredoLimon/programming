const Blockchain = require('./blockchain')
const Block = require('./block')

describe('blockchain', ()=>{
    let bc
    let bc2

    beforeEach(()=>{
        bc = new Blockchain()
        bc2= new Blockchain()
    })

    //test 3
    it('Start the genesis block', ()=>{
        expect(bc.chain[0]).toEqual(Block.genesis())
    })

    //test 4
    it('adds the new block', ()=>{
        const data = 'foo'
        bc.addBlock(data)
        expect(bc.chain[bc.chain.length -1].data).toEqual(data)
    })

    //test 5
    it('validate a valid chain', ()=>{
        bc2.addBlock()
        expect(bc2.isValidChain(bc2.chain)).toBe(true)
    })

    //test 6
    it('validate a chain with a corrup genesis block', ()=>{
        bc2.chain[0].data='cualquier dato'
        expect(bc.isValidChain(bc2.chain)).toBe(false)
    })

    //test 7
    it('invalidate a corrupt chain', ()=>{
        bc2.addBlock('foo')
        bc2.chain[1].data='cualquier dato1'
        expect(bc.isValidChain(bc2.chain)).toBe(false)
    })
})
