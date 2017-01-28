// What is a stack? It is a list of elements that are accessible only from one end of the list.
// That end of the list is called the top. The stack is known as LIFO (Last-in First-out)

// Because of the LIFO nature, any element that is not currently at the top of the stack cannot be accessed.
// In order to get to the element you want, you have to get rid of all the other elements above it first.

function Stack() {
  this.dataStore = []; // Stores the stack elements.
  this.top = 0; // keeps track of whats at the top of the stack
  this.push = push; // pushes an element to the top of the stack
  this.pop = pop; // removes an element from the top of the stack
  this.peek = peek; // returns an element from the stack and returns it.
}

function push (element) {
  this.dataStore[this.top++] = element;
}
// Pushes an element to the top of the stack.(in the dataStore array)

function pop() {
  return this.dataStore[this.top - 1];
}

// The pop function does the reverse of the push function, it returns the element in the top position
// of the stack and then decrements the top variable.
