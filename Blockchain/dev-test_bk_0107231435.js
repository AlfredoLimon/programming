const Block = require('./block');
const block = new Block('07-01-2023', "0".repeat(64), '0'.repeat(64), "Datos a poner aca");

console.log(block.toString());
console.log(Block.genesis().toString());
