console.log("Hello, world!");

// console.assert()
// The console.assert() method writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.
// see Syntax section at the url for more information
// https://developer.mozilla.org/en-US/docs/Web/API/console/assert
const errorMsg = 'the # is not even';
for (let number = 2; number <= 5; number++) {
  console.log(`the # is ${number}`);
  console.assert(number % 2 === 0, { number, errorMsg });
}
