// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
//     }
// }

// const person = new Person('John', 33);
// person.greet();

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        super.speak();
        console.log(`${this.name} the ${this.breed} barks.`);
    }
}

const dog1 = new Dog('Max', 'Golden Retriever');
dog1.speak();