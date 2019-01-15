module.exports = class DoublyLinkedList {

  constructor(...data) {
    this.head = null;
    this.tail = null;
    this.current = null;

    this.length = 0;


  }

  toString() {

  }

  toArray() {

  }

  addToHead(value) {
    const newNode = { value };

    newNode.prev = null;
    newNode.next = this.head;

    this.head = newNode;

    if (this.length === 0) {
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  removeFromHead() {
    if (!this.length === 0) {
      throw new Error('Linked List is empty');
    }

    const value = this.head.value;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return value;
  }

  addToTail() {

  }

  removefromTail() {

  }

  addBeforeCurrent() {

  }

  removeBeforeCurrent() {

  }

  addAfterCurrent() {

  }

  removeAfterCurrent() {

  }


}