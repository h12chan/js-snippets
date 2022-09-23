const a = 1
const b = 1

function numbersEqual(a, b) {
  if (a == b) {
    let c = a + b
  }
}

// instead of above, consider the alternate (opposite) as below
function numbersEqual(a, b) {
  if (a != b) return // negate the equality of the expression and return undefined or otherwise; this is called a "guard clause" to the code below it
  let c = a + b // then there are fewer indentations to make code easier to read
}

// https://www.youtube.com/shorts/JnFh2NoAM4s
