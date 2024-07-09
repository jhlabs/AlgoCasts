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

  getAt(at) {
    let index = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (at === index) {
        return currentNode;
      }

      currentNode = currentNode.next;
      index++;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let prevNode = this.getAt(index - 1);

    if (!prevNode || !prevNode.next) {
      return;
    }

    prevNode.next = prevNode.next.next;
  }

  insertAt(data, index) {
    if (index === 0) {
      const firstNode = new Node(data, this.head);
      this.head = firstNode;
      return;
    }

    const prevNode = this.getAt(index - 1);

    if (!prevNode) {
      const endNode = this.getLast();

      endNode.next = new Node(data);

      return;
    }

    const newNode = new Node(data, prevNode.next);
    prevNode.next = newNode;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);

      counter++;
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;

    while (node) {
      yield node;
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }
}

module.exports = { Node, LinkedList };
