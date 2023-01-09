const Block = require('./block');

for (let i = 1; i<=100; i++){
    block = new Block(Date.now(), "0".repeat(64), "0".repeat(64), `Data${i}`);    
    console.log(block.toString());
}