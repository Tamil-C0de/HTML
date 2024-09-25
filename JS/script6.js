// let char = 'a';
// let ascii_value = char.charCodeAt(0);

// if (ascii_value >= 65 && ascii_value <= 90) {
//     console.log(char + " is an Uppercase");
// }
// else if (ascii_value >= 97 && ascii_value <= 122) {
//     console.log(char + " is a lowercase");
// }

// Template Literals
// let name = "John";
// let age = 30;

// let message = "Hello, my name is " + name + " and I am " + age + " years old";
// let message = `Hello, my name is ${name} and I am ${age} years old`;
// console.log(message);

// Objects
let person = {
    name: "Bruce",
    age: 20,
    hobby: ["Books", "Walking", "Swimming"],
    // name: "John",
};
// let person = new Object();
// person.name = "John";
// person.age = 25;
// console.log(person.name);
// console.log(person["age"]);
person.age = 18;
// console.log(person);

person.email = "bruce123@gmail.com";
// console.log(person);

delete person.age;
// console.log(person.hobby[1]);

let car = {
    brand: "Toyota",
    speed: 0,
    accelerate: function () {
        this.speed += 10;
        console.log(`Speed: ${this.speed}`);
    }
};
// console.log(car);
// car.accelerate();

// for (let key in car) {
//     console.log(`${key}: ${car[key]}`);
// }

console.log(Object.keys(car));
console.log(Object.values(car));