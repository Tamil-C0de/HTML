// function
function greet() {
    console.log("Hello");
    return;
}
// greet();

// Anonymous function  / Function expression
let func = function (name) {
    console.log("Hello", name);
}
// func("Ram");

// Function Hoisting
// test("Function Hoisting");

function test(x) {
    console.log(x);
}

// anonymous();

let anonymous = function () {
    console.log("Anonymous");
}

// function sum() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total;
// }
// console.log(sum(1, 2, 3, 4, 5));

// function sum(...numbers) {
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i];
//     }
//     return total;
// }
// console.log(sum(1, 2, 3, 4, 5));

// Callback function
function greet(name, goodbye) {
    console.log("Hello " + name);
    goodbye();
}

function goodbye() {
    console.log("GoodBye!");
}
greet("John", goodbye);

// Recursion Function
function factorial(n) {
    if (n == 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));