const fib = [1, 1, 2, 3, 5, 8, 13];

const [, a, , b] = fib;

console.log(a, b);

const line = [[19, 23], [32, 334]];

// 1
const [[p1x, p1y], [p2x, p2y]] = line;

console.log(p1x, p1y, p2x, p2y);
// 3 41

const people = ['anna', 'vala', 'shol'];

const [fooP, ...others] = people;

console.log(others);

//4 32

const dict = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak',
    hamster: 'squeak'
};

const res = Object.entries(dict);

console.log(res);

const newArr = res
    .filter((item) => item[1] === 'squeak');
console.log(newArr);


const newArr1 = res
    .filter(([, value]) => value === 'squeak');
console.log(newArr1);
