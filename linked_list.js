// What is a linked list?
// A linked list is a collection of objects called nodes. Each node is linked to a successor
// node in the list using an object reference. The reference to another node is called a link.

// Link list elements are referenced by their relationship to the other elements of the linked list.
// Many linked list implementations include a special node, called the head, to denote the beginning of a linked list


function Node(element) {
  this.element = element; // stores the node's data
  this.next = null; // stores the link to the next node in the linked list.
}

// This is the node class. It consists of 2 properties, the element which stores the node's data &
// next, which stores a link to the next node in the linked list.


//// LINKED LIST CLASS ////

// The linked list class provides functionality for a linked list.
// The class includes functions for:
// inserting new nodes, removing nodes, finding a particular data value in a list and a constructor for creating
// a new linked list.

function LLisst() {
  this.head = new Node("head");
}

LList.prototype.find(item) {
  var currNode = this.head;
  while(currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}

// The find function is a helper function for insert(). It searches through the linked list looking for the
// specified data. When the data is found, the function returns the node storing the data.
