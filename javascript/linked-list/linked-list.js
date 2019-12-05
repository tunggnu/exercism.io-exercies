export class LinkedList {
  constructor() {
    // The maker node at the head of the list.
    this._headMaker = new Node(null);

    // The maker node at the tail of the list.
    this._tailMaker = new Node(null, this._headMaker);

    this._headMaker.next = this._tailMaker;

    this._count = 0;
  }

  push(x) {
    const tailMakerNode = this._tailMaker;
    const currentTailNode = tailMakerNode.prev;

    // Create the new tail node and connect it with the current and the maker.
    const newTailNode = new Node(x, currentTailNode, tailMakerNode);

    // Connect the current tail node with the new tail node.
    currentTailNode.next = newTailNode;

    // Connect the tail maker with the new tail node.
    tailMakerNode.prev = newTailNode;

    this._count += 1;

    return this._count;
  }

  pop() {
    if (this._count === 0) return null;

    const tailMakerNode = this._tailMaker;
    const currentTailNode = tailMakerNode.prev;
    const newTailNode = currentTailNode.prev;

    // Connect the new tail node with the tail maker.
    tailMakerNode.prev = newTailNode;
    newTailNode.next = tailMakerNode;

    // Delete the references.
    currentTailNode.prev = currentTailNode.next = null;

    this._count -= 1;

    return currentTailNode.value;
  }

  shift() {
    if (this._count === 0) return null;

    const headMakerNode = this._headMaker;
    const currentHeadNode = headMakerNode.next;
    const newHeadNode = currentHeadNode.next;

    // Connect the new head node with the head maker.
    headMakerNode.next = newHeadNode;
    newHeadNode.prev = headMakerNode;

    // Delete the references.
    currentHeadNode.prev = currentHeadNode.next = null;

    this._count -= 1;

    return currentHeadNode.value;
  }

  unshift(x) {
    const headMakerNode = this._headMaker;
    const currentHeadNode = headMakerNode._next;

    // Create the new head node and connect it with the current and the maker.
    const newHeadNode = new Node(x, headMakerNode, currentHeadNode);

    // Connect the current head node with the new head node.
    currentHeadNode.prev = newHeadNode;

    // Connect the head maker with the new head node.
    headMakerNode.next = newHeadNode;

    this._count += 1;

    return this._count;
  }

  delete(x) {
    const headMakerNode = this._headMaker;
    const tailMakerNode = this._tailMaker;

    for (
      let node = headMakerNode.next;
      node !== tailMakerNode;
      node = node.next
    ) {
      if (node.value !== x) continue;

      // Connect the two adjacent nodes.
      node.prev.next = node.next;
      node.next.prev = node.prev;

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
  constructor(x, prev = null, next = null) {
    this._value = x;
    this._next = next;
    this._prev = prev;
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
