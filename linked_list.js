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

function LList() {
  this.head = new Node("head");
  // this.remove = remove;
 }


LList.prototype.find = function(item) {
  var currNode = this.head; // creates a new node and assign it as the head node.
  while(currNode.element != item) { // loops through the linked list, moving one node to the next when the value of the current nodes's element property is not equal to the data we are  searching for.
    currNode = currNode.next;
  }
  return currNode; // search is successful, returns the node storing the data, if not return null.
}

// The find function is a helper function for insert(). It searches through the linked list looking for the
// specified data. When the data is found, the function returns the node storing the data.

LList.prototype.insert = function(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}

// This function inserts a new node into a list. To do it, you have to specify which node you want to insert the
// new node before or after. In order to do this, you have to use the find() function to find the "after" node.

LList.prototype.display = function() {
  var currNode = this.head;
  while(!(currNode.next = null)){
    print(currNode.next.element);
    currNode = currNode.next;
  }
}

// The function display() starts by joining the linked list by assigning the head to a new node. The I loop
// through the linked list only stopping when the value of the current node's property is set to null.
// In order to display only nodes with data in them, we access the element property of the node that the current
// node is pointing to.


LList.prototype.findPrevious = function(item) {
  var currNode = this.head;
  while(!(currNode.next = null ) && (currNode.next.element != item)) {
    currNode = currNode.next;
  }
  return currNode;
}

// In order to remove a node from the list, I need a function that finds the node that is just before the node
// that I want to remove. Once I find that node, I change its next property to no longer reference the removed
// node, and the previous node is modified to point to the node after the removed node.
// This findPrevious() function does this. It traverses the linked list, stopping at each node to see if the next
// node stores the data that is to be removed. When the data is found, the function returns this node (the "previous node"),
// so that its next property can be modified.

LList.prototype.remove = function(item) {
  var prevNode = this.findPrevious(item);
  if (!(prevNode.next = null)) {
    prevNode.next = prevNode.next.next;
  }
}

// .next.next skips over the node I want to remove and linking the "previous" node with the node just after
// the one we are removing.


var cities = new LList();
cities.insert("New York", "head");
cities.insert("Long Island", "New York");
cities.insert("Miami", "Florida");
cities.display();
