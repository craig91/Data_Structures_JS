function List() {
  this.listSize = 0; // The number of elements in this list.
  this.pos = 0; // Current position in the list.
  this.dataStore = [], // This empty array will store the elements appeneded to it.
  this.clear = clear; // Clears all elements from the list.
  this.find = find; // Finds an element in the list.
  this.toString = toString; // Returns string representation of the list.
  this.insert = insert; // inserts new element after existing element.
  this.append = append; // Adds new element to the end of the list.
  this.remove = remove; // Removes an element from the list.
  this.front = front; // Set current position to first element of the list.
  this.end = end; // Sets current position to last element of list.
  this.prev = prev; // Moves current position back one element.
  this.next = next; // moves current position forward one element.
  this.length = length; // Returns the number of elements in the list.
  this.currPos = currPos; // Returns the current position in list.
  this.moveTo = moveTo; // Moves the current position to a specified position.
  this.getElement = getElement; // Returns element at current position.
  this.length = length;
  this.contains = contains; // Checks to see if a particular value is in the list.
}


function append(element) {
  this.dataStore[this.listSize++] = element;
}

// The append function adds on an element to the front of the this.dataStore array by adding on the
// this.listSize.

function find(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return i;
    }
  }
  return -1;
}


function remove(element) {
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
}

function length() {
  return this.listSize;
}

function toString() {
  return this.dataStore;
}


function insert (element, after) {
  var insertPos = this.find(after);
  if (insertPos > -1) {
   this.dataStore.splice(insertPos+1, 0, element);
   ++this.listSize;
   return true;
  }
  return false;
}

function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

function contains(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return true;
    }
  }
  return false;
}

function front() {
  this.pos = 0;
}

function end() {
  this.pos = this.listSize -1;
}

function prev() {
  if(this.pos > 0){
    --this.pos;
  }
}

function next() {
  if (this.pos > 0) {
    --this.pos;
  }
}

function currPos() {
  return this.pos;
}

function moveTo(position) {
  this.pos = position;
}

function getElement() {
  return this.dataStore[this.pos];
}
