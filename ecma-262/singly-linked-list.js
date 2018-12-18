class SinglyLinkedList {

  constructor(data) {
    this.head = null;
    this.length = 0;
    this.addToHead(data);
  }

  addToHead(value) {
    const newNode = { value };
    newNode.next = this.head;
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

}