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
// this.listSize.1

function find(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return i;
    }
  }
  return -1;
}

// This function acts as a helper function to the remove function.
// It will search through the data store array and then uses a conditional to find out if the
// element exists in the data store array. If not return -1 which is saying that it is not there.


function remove(element) {
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
}

// The remove function uses the position returned by find() and the splices the dataStore
// array to that place. After the array is mutated, listSize is decremented by one to reflect the new size
// of the list.


function length() {
  return this.listSize;
}

function toString() {
  return this.dataStore;
}

// the toString() allows me to view the elements of a list.
// Strictly speaking, this function returns an array object and not a string,
// but it is used for providing the current state of an object, and just returning the array works well for this.


function insert (element, after) {
  var insertPos = this.find(after);
  if (insertPos > -1) {
   this.dataStore.splice(insertPos+1, 0, element);
   ++this.listSize;
   return true;
  }
  return false;
}

// insert uses the helper function find() to determine the correct insertion position
// for the new element by finding the specifified in the after argument.
// Once the position is found, the splice() to insert the new element into the list.
// Once that happens, I will incremement listSize by 1 and return true to indicate the insertion was successful.


function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

// This function uses the delete operator to delete the dataStore array, and the next line re-creates the
// empty array. The last line sets the values of listSize and pos to 0 to indicate the start of a new list.



function contains(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return true;
    }
  }
  return false;
}

// This function is useful when you want to check a list to see if a
// particular value which is part of the list.


// LIST TRAVERSAl //

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
