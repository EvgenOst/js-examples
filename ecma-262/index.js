const readline = require('readline');
const SLL = require('./singly-linked-list');

let list = new SLL(1);

list.addToHead(2).addToHead(3).addToHead(4);

// let val = list.removeFromHead();

console.log('' + list);

let val = list.find(value => value == 3);

console.log('val = ', val);

val = list.find(v => v == 0);

console.log('val = ', val);
