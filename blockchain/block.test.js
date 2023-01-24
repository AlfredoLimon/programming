const Block = require('./block')
const {DIFFICULTY} = require('../config')

describe('block', () => {
    let data, lastBlock, block
    beforeEach(() => {
        data = 'foo'
        lastBlock = Block.genesis()
        block = Block.mineBlock(lastBlock, data)
    })

//test 0
    it('Set the data in block to match the input', () => {
        expect(block.data).toEqual(data)
    })

//test 1
    it('Set the lastHash in Block to match the Hash in the last Block', () => {
        expect(block.lastHash).toEqual(lastBlock.hash)
    })

//test mineblock
    it('Generate the hash to match the DIFFICULTY', () => {
        expect(block.hash.substring(0, DIFFICULTY)).toEqual('0'.repeat(DIFFICULTY))
    })
})
