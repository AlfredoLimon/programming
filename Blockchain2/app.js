const SHA256=require('crypto-js/sha256')

class Block {
    constructor(timestamp,data,lastHash=''){
        this.timestamp=timestamp
        this.data=data
        this.lastHash=lastHash
        this.hash=this.calchash()
    }

    calchash(){
        return SHA256(this.timestamp+this.lastHash+JSON.stringify(this.data)).toString()
    }
}

class Blockchain {
    constructor(){
        this.chain=[this.genesis()]
    }

    genesis(){
        return new Block('1-8-23','genesis','0'.repeat(64))
    }

    getlastBlock(){
        return this.chain[this.chain.length -1]
    }

    addBlock(block){
        block.lastHash=this.getlastBlock().hash
        block.hash=block.calchash()
        this.chain.push(block)
    }
}

let bc=new Blockchain()
bc.addBlock(new Block('1-9-23',{cantidad: 10}))
bc.addBlock(new Block('1-10-23',{cantidad: 20}))
bc.addBlock(new Block('1-11-23',{cantidad: 30}))

console.log(JSON.stringify(bc,null,4))