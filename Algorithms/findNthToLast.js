/**
 * Given a single linked list, write a function to find the nth-to-last element of the list.
 *
 * ex: 1 -> 2 -> 3 -> 4 -> 5 -> null
 * n = 2 return 3
 * n = 3 return 2
 */

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(val) {
    var node = new Node(val);
    if (this.head === null) {
      this.head = node;
      return;
    }
    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = node;
  }

  size() {
    if (this.head === null) return 0;
    let count = 0;

    while (this.head !== null) {
      count++;
      this.head = this.head.next;
    }

    return count;
  }
}

nthLast = (ll, n) => {
  return ll.size() - n;
};

var linklist = new LinkedList();
linklist.insert(1);
linklist.insert(2);
linklist.insert(3);
linklist.insert(4);
linklist.insert(5);
console.log(nthLast(linklist, 1));

/**********************************************************************************************************************/
