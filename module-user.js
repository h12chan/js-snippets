export default class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

export function printName(user) {
  console.log(`User's name is ${user.name}`)
}

export function printAge(user) {
  console.log(`User is ${user.age} years old`)
}

// 2 types of exports: default export and standard export
// export default User, printName, printAge
// export { User, printName, printAge }

// remember you can only default export 1 thing
// usually the class your file is defining

// you can export inline too as above
