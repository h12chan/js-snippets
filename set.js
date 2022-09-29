const names1 = ['bob','bob','mary','jane'];
console.log(names1); // see the duplicate bob

const names2 = new Set(['bob','bob','mary','jane']);
names2.add('rick');
names2.delete('mary');
console.log(names2);

// https://www.youtube.com/shorts/o-2SG0kPKsE
