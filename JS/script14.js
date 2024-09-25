// Transpiler -> Babel
// Default Parameters

// function greet(name = 'Guest') {
//     console.log(`Hello, ${name}`);
// }
// greet();
// greet('Admin');

// Destructuring Arrays and Objects
let fruits = ['Apple', 'Banana', 'Orange'];
let [first, second] = fruits;
// console.log(first, second);

const person = { name: "Tony", age: 25, city: "LA" };
const { name, age } = person;
// console.log(name, age);

// Rest(...) and Spread(...) Operators
function combineNames(...names) {
    // console.log(names);
    return names.join(', ');
}

// console.log(combineNames('Bruce', "Tony", "Charles", 'Xavier'));
// console.log(combineNames('Jack', "John", 'Bob'));

const colors = ['Red', 'Blue', 'Green', 'White', 'Black'];
const [primary, secondary, ...otherColors] = colors;
// console.log(primary, secondary);
// console.log(otherColors);

const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
// console.log(newArr);

// let user = { name: "Tony", age: 25 };
// const updateUser = { ...user, city: 'LA' };
// console.log(updateUser);

// Arrow Function
/* 
    (para1, para2) =>{

    }
*/
const add = (a, b) => a + b;
// console.log(add(10, 20));

const greet = name => {
    let message = `Hello, ${name}`;
    return message;
}
// console.log(greet('Bob'));

const user = {
    name: "Tony",
    age: 25,
    info: () => console.log(`Hello, ${this.name}`)
};
user.info();