/**
 * Реализация простого односвязного списка
 */

module.exports = class SinglyLinkedList {

  constructor(...data) {
    this.head = null;
    this.tailPointer = null;
    this.length = 0;

    this.addToHead(...data);
  }

  /**
   * Перегрузка стандартного метода Object.toString.
   * Возвращает стилизованную строку, содержащую все элементы списка
   * 
   * @returns {string}
   */
  toString() {
    if (this.length === 0) {
      return '';
    }

    let currentNode = this.head;
    let result = currentNode.value.toString();

    while (currentNode = currentNode.next) {
      result += ' => ' + currentNode.value;
    }

    return `[ ${ result } ]`;
  }

  /**
   * Преобразует список в массив.
   * Не меняет исходный список 
   * 
   * @returns {Array} Массив, содержащий все элементы списка
   */
  toArray() {
    if (this.length === 0) {
      return [];
    }

    let currentNode = this.head;
    let result = [];

    do {
      result.push(currentNode.value);
    } while (currentNode = currentNode.next)

    return result;
  }

  /**
   * @private Добавление одиночного элемента в список
   * 
   * @param  {any} value
   */
  _addSingleItemToHead(value) {
    const newNode = { value };
    newNode.next = this.head;

    if (this.length === 0) {
      this.tailPointer = newNode;
    }

    this.head = newNode;
    this.length++;
  }

  /**
   * Добавление элементов в начало списка
   * 
   * @param  {any [, any...]}
   * 
   * @returns {SinglyLinkedList} this
   */
  addToHead(...values) {
    for (let i = values.length; i--;) {
      this._addSingleItemToHead(values[i]);
    }

    return this;
  }
  
  /**
   * Удаление одного элемента с начала списка
   * 
   * @returns {any} Удаленный элемент
   */
  removeFromHead() {
    if (this.length === 0) {
      throw new Error('Linked list is empty');
    }

    const value = this.head.value;
    this.head = this.head.next;
    this.length--;

    return value;
  }

  /**
   * @private
   * Добавление одного элемента в конец списка
   * 
   * @param {any} value
   */
  _addSingleItemToTail(value) {
    if (this.length === 0) {
      this._addSingleItemToHead(value);

      return this;
    }

    this.tailPointer.next = {
      value,
      next: null
    };
    this.tailPointer = this.tailPointer.next;

    this.length++;
  }

  /**
   * Добавление элементов в конец списка
   * 
   * @param  {...any} values 
   * 
   * @returns {SinglyLinkedList} this
   */
  addToTail(...values) {
    values.forEach(value => this._addSingleItemToTail(value));

    return this;
  }

  /**
   * Возвращает первый элемент списка
   * 
   * @returns {any}
   */
  getHead() {
    return this.head.value;
  }

  /**
   * Возвращает последний элемент списка
   * 
   * @return {any}
   */
  getTail() {
    return this.tailPointer.value;
  }

  /*********************************************
   * 
   * Методы проходящие по всему списку
   *
   *********************************************/

  /**
   * Проходит по списку и возвращает элемент, для которого функция cb вернет истину
   * @param  {Function} cb
   */
  find(cb) {
    if (this.length === 0) {
      return;
    }

    let currentNode = this.head;

    do {
      let result = cb(currentNode.value)

      if (Boolean(result)) {
        return currentNode.value;
      }
    } while (currentNode = currentNode.next)
  }

}