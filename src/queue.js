const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {
    let underlyingList;

    if (this.length === 0) {
      underlyingList = new ListNode(null);
    } else {
      underlyingList = this.head;
    }

    return underlyingList;
  }

  enqueue(value) {
    let newNode = new ListNode(value);

    if (this.length === 0) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }

    this.length++;
  }

  dequeue() {
    let deletedNode = this.head;
    this.head = this.head.next;
    this.length--;

    return deletedNode.value;
  }
}

module.exports = {
  Queue
};
