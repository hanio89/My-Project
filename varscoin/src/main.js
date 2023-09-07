const {Blockchain, Transaction} = require('./blockchain');

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('6b2aa19c05ee0d5b04eb4c5b3686d0035f6def6e9155bf5afd000ce5ed635063');
const myWalletAddress = myKey.getPublic('hex');

let varsCoin = new Blockchain();
//part4
const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
varsCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
varsCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of varsiers is', varsCoin.getBalanceOfAddress(myWalletAddress));
varsCoin.chain[1].transactions[0].amount = 1;

console.log('Is chain valid?', varsCoin.isChainValid());

//part3

// varsCoin.createTransaction(new Transaction('address1', 'address2', 100));
// varsCoin.createTransaction(new Transaction('address2', 'address1', 50));

// console.log('\n Starting the miner...');
// varsCoin.minePendingTransactions('varsiers-address');

// console.log('\nBalance of varsiers is', varsCoin.getBalanceOfAddress('varsiers-address'));

// console.log('\n Starting the miner again...');
// varsCoin.minePendingTransactions('varsiers-address');

// console.log('\nBalance of varsiers is', varsCoin.getBalanceOfAddress('varsiers-address'));

// console.log('\n Starting the miner again...');
// varsCoin.minePendingTransactions('varsiers-address');

// console.log('\nBalance of varsiers is', varsCoin.getBalanceOfAddress('varsiers-address'));

//part1
// varsCoin.addBlock(new Block(1, "10/02/2023", { amount: 4}));
// varsCoin.addBlock(new Block(2, "15/03/2023", { amount: 10}));

// // console.log(JSON.stringify(varsCoin, null, 4));
// console.log('Is blockchain valid?' + varsCoin.isChainValid());

// varsCoin.chain[1].data = {amount: 100};
// varsCoin.chain[1].hash = varsCoin.chain[1].calculateHash();

// console.log('Is blockchain valid?' + varsCoin.isChainValid());

//part2
// console.log("Mining block 1...");
// varsCoin.addBlock(new Block(1, "10/01/2023", { amount: 4}));
// console.log("Mining block 2...");
// varsCoin.addBlock(new Block(2, "15/02/2023", { amount: 10}));
