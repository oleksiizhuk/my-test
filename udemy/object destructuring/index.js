const person = {
    firstName: 'oleksii',
    lastName: 'zhuk',
    age: '26'
};
//старый метод
const firstN = person.firstName;
const lastN = person.lastName;
// новый метод
const {firstName, lastName} = person;

console.log(firstName, lastName);
