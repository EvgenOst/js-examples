module.exports = class SinglyLinkedList {

  constructor(data) {
    this.head = null;
    this.length = 0;
    this.addToHead(data);
  }

  toString() {
    if (this.length === 0) {
      return '';
    }

    let pointer = this.head;
    let result = pointer.value.toString();
    
    while (pointer = pointer.next) {
      result += ', ' + pointer.value;
    }

    return `[ ${ result } ]`;
  }

  addToHead(value) {
    const newNode = { value };
    newNode.next = this.head;

    this.head = newNode;
    this.length++;
    
    return this;
  }

  removeFromHead() {
    if (this.length === 0) {
      throw new Error('Linked list is empty');
    }

    const value = this.head.value;
    this.head = this.head.next;
    this.length--;

    return value;
  }

  find(cb) {
    if (this.length === 0) {
      return;
    }

    let pointer = this.head;

    do {

      let result = cb(pointer.value)

      if (Boolean(result)) {
        return pointer.value;
      }

    } while (pointer = pointer.next)
  }

}