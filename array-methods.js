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
   'type': 'engine'},
  [ 'conductor', 'engineer' ]
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

console.log("array destructuring - extract multiple properties from an array and assign them to variables:");
let [first, second, third] = train
console.log(first, second, third);

/*
train = [
  { 'colour': 'green',
   'type': 'passenger'}
  ]
*/
console.log("array destructuring - assign a default value using destructuring when there is no value or undefined for the array element:");
[first, second = 'no train compartment'] = train;
console.log(first, second);

console.log("array destructuring - you can skip an array element to map to a variable:");
[first, , , , ,sixth] = train;
console.log(first, sixth);

console.log("array destructuring - nested array destructuring:");
let conductor = train[6][0];
console.log(conductor);

console.log("spread operator - clone an array:");
const trainCloned = [...train];
console.log(trainCloned);
train === trainCloned; // false

console.log("rest operator - map out residual elements in a new array:");
const [first, second, ...trainResidual] = train;
console.log(first);
console.log(second);
console.log(trainResidual);

console.log("array destructuring - swap the values of two variables:");
let first = "smile";
let second = "frown";
[first, second] = [second, first];
console.log(first, second);

console.log("array destructuring - merge two arrays:");
let trainCloned = [1,2,3,4,5,6];
const combined = [...train, ...trainCloned];
console.log(combined);

const first = ['a','b','c']
const second = ['d','e','f']
const merged = first.concat(second);
console.log(merged);
console.log(first);
console.log(second);

const joined1 = first.join();
console.log(joined1);
const joined2 = first.join('<->');
console.log(joined2);

const colors = ['red', 'blue', 'green'];
colors.fill('pink');
console.log(colors); // ["pink", "pink", "pink"]
const colors = ['red', 'blue', 'green'];
colors.fill('pink', 1,3); // ["red", "pink", "pink"]

const colors = ['red', 'blue', 'green'];
colors.includes('blue'); // returns true

const colors = ['red', 'blue', 'blue', 'green'];
colors.indexOf('blue'); // returns 1
colors.lastIndexOf('blue'); // returns 2

// to be continued
