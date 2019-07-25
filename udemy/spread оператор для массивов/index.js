const arr = [1, 2, 3];
const arr2 = [34, 123, 12];

console.log(Math.max.apply(Math, arr));

console.log(Math.max(...arr));
console.log(Math.max(...arr, ...arr2));

const shallowCopy = [...arr2, ...arr, 123];

console.log(shallowCopy);

