const readline = require('readline');
const SLL = require('./singly-linked-list');

let list = new SLL(1,2,3);

list.addToHead(-1,0,0.9);

list.addToTail(10, {v: 5}, 25);

console.log('' + list.toArray());
