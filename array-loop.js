import train from './array-object.js';

function arrayFor(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function arrayForIn(arr) {
  for (let a in arr) {
    console.log(arr[a]);
  }
}

function arrayForOf(arr) {
  for (let a of arr) {
    console.log(a);
  }
}

function arrayForEach(arr) {
  arr.forEach(a => console.log(a));
}

console.log("For Loop:");
arrayFor(train);

console.log("For In Loop:");
arrayForIn(train);

console.log("For Of Loop:");
arrayForOf(train);

console.log("For Each Loop:");
arrayForEach(train);
