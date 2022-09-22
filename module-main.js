import User, {printName as printUserName, printAge } from './module-user.js' // there might be error in which case in html file script tag, add type="module"
// import U from './module-user.js' works equally well by renaming the class
// to import non-default things, you need to put them in curly braces
const user = new User('Bob', 11)
console.log(user)
printUserName(user)
printAge(user)
