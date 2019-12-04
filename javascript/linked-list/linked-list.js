export class LinkedList {
  constructor() {
    this._headNode = this._tailNode = null;
    this._count = 0;
  }

  push(x) {
    const node = new Node(x);

    if (this._count === 0) {
      // Initilize the list.
      this._headNode = this._tailNode = node;
    } else {
      // Attach the new node to the tail of the list.
      this._tailNode.next = node;
      node.prev = this._tailNode;

      // Move the tail pointer forward.
      this._tailNode = node;
    }

    this._count += 1;

    return this._count;
  }

  pop() {
    const node = this._tailNode;

    // Move the tail pointer backward.
    this._tailNode = node.prev;
    if (this._tailNode !== null) this._tailNode.next = null;

    // Delete the references.
    node.prev = node.next = null;

    this._count -= 1;

    return node.value;
  }

  shift() {
    const node = this._headNode;

    // Move the head pointer forward.
    this._headNode = this._headNode.next;
    if (this._headNode !== null) this._headNode.prev = null;

    // Delete the references.
    node.prev = node.next = null;

    this._count -= 1;

    return node.value;
  }

  unshift(x) {
    const node = new Node(x);

    if (this._count === 0) {
      // Initilize the list.
      this._headNode = this._tailNode = node;
    } else {
      // Attach the new node to the head of the list.
      node.next = this._headNode;
      this._headNode.prev = node;

      // Move the head pointer backward.
      this._headNode = node;
    }

    this._count += 1;

    return this._count;
  }

  delete(x) {
    for (let node = this._headNode; node !== null; node = node.next) {
      if (node.value !== x) continue;

      if (node === this._headNode) {
        // Move the head pointer forward.
        this._headNode = node.next;
        if (this._headNode !== null) this._headNode.prev = null;
      } else if (node === this._tailNode) {
        // Move the tail pointer backward.
        this._tailNode = node.prev;
        if (this._tailNode !== null) this._tailNode.next = null;
      } else {
        // Connect the two adjacent nodes.
        node.prev.next = node.next;
        node.next.prev = node.prev;
      }

      // Delete the references.
      node.prev = node.next = null;

      this._count -= 1;

      return this._count;
    }
  }

  count() {
    return this._count;
  }
}

class Node {
  constructor(x) {
    this._value = x;
    this._next = null;
    this._prev = null;
  }

  get value() {
    return this._value;
  }

  get next() {
    return this._next;
  }
  set next(next) {
    this._next = next;
  }

  get prev() {
    return this._prev;
  }
  set prev(prev) {
    this._prev = prev;
  }
}
