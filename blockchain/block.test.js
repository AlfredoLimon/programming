const Block = require('./block');

describe('block', ()=>{
    let data, lastBlock, block;
    beforeEach(()=>{
        data='foo';
        lastBlock=Block.genesis();
        block=Block.mineBlock(lastBlock,data);
    });
//test 0
    it('Set the data in block to match the input', ()=>{
        expect(block.data).toEqual(data);
    });
//test 1
    it('Set the lastHash in Block to match the Hash in the last Block', ()=>{
        expect(block.lastHash).toEqual(lastBlock.hash);
    })
})
