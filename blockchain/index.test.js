const Blockchain = require('./index')
const Block = require('./block')

describe('blockchain', ()=>{
    let bc
    let bc2

    beforeEach(()=>{
        bc = new Blockchain()
        bc2= new Blockchain()
    })

    //test 2
    it('Start the genesis block', ()=>{
        expect(bc.chain[0]).toEqual(Block.genesis())
    })

    //test 3
    it('adds the new block', ()=>{
        const data = 'foo'
        bc.addBlock(data)
        expect(bc.chain[bc.chain.length -1].data).toEqual(data)
    })

    //test 4
    it('validate a valid chain', ()=>{
        bc2.addBlock('foo')
        expect(bc2.isValidChain(bc2.chain)).toBe(true)
    })

    //test 5
    it('validate a chain with a corrup genesis block', ()=>{
        bc2.chain[0].data='cualquier dato'
        expect(bc.isValidChain(bc2.chain)).toBe(false)
    })

    //test 6
    it('invalidate a corrupt chain', ()=>{
        bc2.addBlock('foo')
        bc2.chain[1].data='cualquier dato1'
        expect(bc.isValidChain(bc2.chain)).toBe(false)
    })

    //test 7
    it('Replace the chain with a valid chain', ()=>{
        bc2.addBlock('goo')
        bc.replaceChain(bc2.chain)
        expect(bc.chain).toEqual(bc2.chain)
    })

    //test 8
    it('Does not replace the Blockhain with one of less or equal to lenght', ()=>{
        bc.addBlock('foo')
        bc.replaceChain(bc2.chain)
        expect(bc.chain).not.toEqual(bc2.chain)
    })

})
