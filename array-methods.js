// https://www.freecodecamp.org/news/the-javascript-array-handbook/

let train = [
  { 'colour': 'green',
   'type': 'passenger'},
  { 'colour': 'red',
   'type': 'passenger'},
  { 'colour': 'yellow',
   'type': 'passenger'},
  { 'colour': 'brown',
   'type': 'cargo'},
  { 'colour': 'black',
   'type': 'cargo'},
  { 'colour': 'blue',
   'type': 'engine'}
  ]

train.push({colour:'gold',type:'passenger'});
console.log("push() - insert an element at the end of the array:");
console.log(train);

train.unshift({colour:'gold',type:'passenger'});
console.log("unshift() - insert an element at the beginning of the array:");
console.log(train);

train.pop();
console.log("pop() - remove an element from the end of the array:");
console.log(train);

train.shift();
console.log("shift() - remove an element from the beginning of the array:");
console.log(train);

const trainCopy = train.slice();
console.log("slice() - create a shallow copy of an array:");
console.log(trainCopy);
console.log(trainCopy === train);

console.log("Array.isArray() - determine if a value is an array:");
console.log(Array.isArray(train));

console.log("length - determine the size of an array:");
console.log(train.length);

// to be continued
