const { text } = require('body-parser')
const SHA256 = require('crypto-js/sha256')
const {DIFFICULTY, MINE_RATE} = require('../config')

class Block {
    constructor(timestamp, lastHash, hash, data, nonce, difficulty, proccessTime) {
        this.timestamp = timestamp
        this.lastHash = lastHash
        this.hash = hash
        this.data = data
        this.nonce = nonce
        this.difficulty = difficulty || DIFFICULTY  
        this.proccessTime = proccessTime   //Time spend to mine a block      
    }

    toString() {
        return `Block -
                Timestamp: ${this.timestamp}
                Last Hash: ${this.lastHash}
                Hash: ${this.hash}
                Data: ${this.data}
                Nonce: ${this.nonce}
                Difficulty: ${this.difficulty}
                proccessTime: ${this.proccessTime}`
    }

    static  genesis() {
        return new this('07-01-2023', "0".repeat(64), "0".repeat(64), 'GenesisBlock', 0, DIFFICULTY, 0)
    }

    static mineBlock(lastBlock, data) {
        let hash, timestamp
        //const timestamp = Date.now()
        const lastHash = lastBlock.hash
        //const hash = this.hash(timestamp,lastHash,data)
        //return new this(timestamp, lastHash, hash, data)
        let {difficulty} = lastBlock
        let nonce = 0
        let t1 = Date.now()

        do {
            nonce++
            timestamp = Date.now()
            difficulty = Block.adjustDifficulty(lastBlock, timestamp)
            hash = Block.hash(timestamp, lastHash, data, nonce)
            //console.log(hash)
        } 
        while(hash.substring(0, difficulty) != '0'.repeat(difficulty))
        let t2 = Date.now()
        let proccessTime = t2 - t1
        return new this(timestamp, lastHash, hash, data, nonce, difficulty, proccessTime)
    } 

    static hash(timestamp, lastHash, data, nonce, difficulty) {
        return SHA256(`${timestamp} ${lastHash} ${data} ${nonce} ${difficulty}`).toString()
    }

    static blockHash(block) {
        const {timestamp, lastHash, data, nonce, difficulty} = block
        return  Block.hash(timestamp, lastHash, data, nonce, difficulty)
    }

    static adjustDifficulty (lastBlock, currentTime) {
        let {difficulty} = lastBlock
        difficulty = lastBlock.timestamp + MINE_RATE > currentTime ? difficulty +1 : difficulty -1
        return difficulty
    }
}

module.exports = Block