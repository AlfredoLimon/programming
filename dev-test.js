/* var Blockchain = require('./blockchain')
var Block = require('./blockchain/block')

//const bc = Block.genesis()
const bc = new Blockchain() 
const bc2 = new Blockchain()
//const data = 'foo'
 //       bc.addBlock(data)
 //       expect(bc.chain[bc.chain.length -1].data).toEqual(data)

bc2.addBlock('2')


console.log(bc2.chain)

for(let i=1 ; i<bc2.chain.length ; i++) {   
const block = bc2.chain[i]
const lastBlock = bc2.chain[i -1]
if((block.lastHash !== lastBlock.hash) || (block.hash !== Block.blockHash(block))) {
//if((block.lastHash !== lastBlock.hash)){
    }
    console.log(bc2.chain[bc2.chain.length -1].hash)
    console.log(Block.blockHash(block))
} */

const Blockchain = require('./blockchain/index')

const bc = new Blockchain()

for(let i=1 ; i<200 ; i++) {
    console.log(bc.addBlock(`Block ${i}`).toString())
}