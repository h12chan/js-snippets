// calculator using callback

function multiply(x, y) {return x * y; }
function divide(x, y) {return x / y; }

function calculator(x, y, callback) {
  const ans = callback(x, y);
  console.log('Ans: ', ans);
}

calculator(5, 7, multiply); // 35

// https://www.youtube.com/shorts/UYifNuc6d9g
