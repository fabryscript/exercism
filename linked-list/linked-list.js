//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add an element to the end of the linked list
  push(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Remove and return the last element from the linked list
  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current.data;
  }

  // Remove and return the first element from the linked list
  shift() {
    if (!this.head) return undefined;

    const oldHead = this.head;
    this.head = oldHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return oldHead.data;
  }

  // Add an element to the beginning of the linked list
  unshift(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  // Delete the first occurrence of a value in the linked list
  delete(data) {
    if (!this.head) return false;

    if (this.head.data === data) {
      this.shift();
      return true;
    }

    let current = this.head;

    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        this.length--;
        return true;
      }
      current = current.next;
    }

    return false;
  }

  // Return the number of elements in the linked list
  count() {
    return this.length;
  }
}
