max(1, 2);
max(1, 2, 3, 4, 5);
max(1);

function max(...numbers) {
    console.log(numbers);
}

function min(a, b, ...numbers) {
    console.log(`a - ${a}`);
    console.log(`b - ${b}`);
    console.log(`numbers - ${numbers}`);
    console.log(numbers);
}

min(1, 2, 3, 4, 5, 6)
