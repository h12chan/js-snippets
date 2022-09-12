import train from './array-object.js';

function defaultArg(arr=[{colour:'off-white'},{type:'engine'}]) {
  console.log(arr);
}

console.log("Default argument:");
defaultArg();

console.log("Injected argument:");
defaultArg(train);
