// Pass By Value, and Pass By Reference
let a = 10
let b = "Hi"
let c = [1, 2]
let d = c
d = [3, 4, 5]

let c = [1, 2] // 0x01
console.log(`c = ${c}`)
add(c, 3)
console.log(`c = ${c}`)

function add(array, element) { // 0x01, 3
	array.push(element)
}

// primitives are pass-by-value
// arrays, objects, classes are pass-by-reference

// https://www.youtube.com/watch?v=-hBJz2PPIVE
