// Intl.NumberFormat()
const { format } = 
  new Intl.NumberFormat('en-US', // fr-FR
  {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  });

console.log(format(200.23));
console.log(format(200.99));
console.log(format(777));
console.log(format(0.01));
console.log(format(42069));

// https://www.youtube.com/shorts/J1szHIME1ok
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat