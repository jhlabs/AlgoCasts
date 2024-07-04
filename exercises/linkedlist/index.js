// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }

      node = node.next;
    }

    return node;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let node = this.head;

    while (node.next.next) {
      node = node.next;
    }

    node.next = 0;
  }

  insertLast(data) {
    const last = this.getLast();
    const newNode = new Node(data);

    if (!last) {
      this.head = newNode;
      return;
    }

    last.next = newNode;
  }

  clear() {
    this.head = null;
  }
}

module.exports = { Node, LinkedList };
